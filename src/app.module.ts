import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { EncryptionService } from './encription.service';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, CommentModule, PostModule],
  controllers: [],
  providers: [EncryptionService],
})
export class AppModule {}
