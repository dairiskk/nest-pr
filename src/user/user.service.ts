import { HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EncryptionService } from 'src/encription.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService, private encriptionService: EncryptionService) { }

    async findByEmail(
        params: { email: string }
    ): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { email: params.email }
        });
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        let user = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
        if (user) {
            throw new HttpException("User already exists", 402)
        }
        return this.prisma.user.create({
            data: {
                email: data.email,
                password: (await this.encriptionService.hashPassword(data.password)).toString(),
                createdAt: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
                updatedAt: new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
            }
        })
    }
}