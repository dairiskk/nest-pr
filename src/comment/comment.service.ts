import { Injectable } from '@nestjs/common';
import { Comment, Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.CommentCreateInput): Promise<Comment | null> {
        return this.prisma.comment.create({
            data: data
        });
    }

    async getAll(): Promise<Comment[] | null> {
        return this.prisma.comment.findMany({

        });
    }

    async findById(where: Prisma.CommentWhereUniqueInput): Promise<Comment | null> {
        return this.prisma.comment.findUnique({
            where,
        });
    }

    async comments(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CommentWhereUniqueInput;
        where?: Prisma.CommentWhereInput;
        orderBy?: Prisma.CommentOrderByWithRelationInput;
    }): Promise<Comment[] | null> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.comment.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
}