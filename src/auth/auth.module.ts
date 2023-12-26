import { Module } from '@nestjs/common';

import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { EncryptionService } from 'src/encription.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';

@Module({
    imports: [UserModule, PrismaModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [EncryptionService, AuthService, JwtService],
    controllers: [],
    exports: [AuthService],
})
export class AuthModule { }