import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { EncryptionService } from 'src/encription.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService, UserService, EncryptionService, PrismaService],
    controllers: [UserController],
    exports: [AuthService],
})
export class AuthModule { }