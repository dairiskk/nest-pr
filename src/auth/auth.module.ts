import { Module } from '@nestjs/common';

import { JwtModule, JwtService } from '@nestjs/jwt';
import { EncryptionService } from 'src/encription.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UserModule,
    PrismaModule,
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
export class AuthModule {}
