import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EncryptionService } from 'src/encription.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, PrismaService, EncryptionService, AuthService],
    exports: []
})
export class UserModule { }
