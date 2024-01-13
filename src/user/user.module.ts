import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { EncryptionService } from 'src/encription.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, EncryptionService, AuthService],
  exports: [UserService],
})
export class UserModule {}
