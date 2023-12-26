import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    constructor(
        //  private readonly usersService: UserService
    ) {
        super();

    }
    async onModuleInit() {
        await this.$connect();
        //  await this.usersService.createUser({ email: "test@test.kk", password: "Password1" });
    }
}