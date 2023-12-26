import { Module } from '@nestjs/common';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { PostController } from './post/post.controller';
import { EncryptionService } from './encription.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [AuthModule, PrismaModule, UserModule],
  controllers: [CommentController, PostController],
  providers: [PostService, CommentService, EncryptionService, JwtService]
})
export class AppModule { }
