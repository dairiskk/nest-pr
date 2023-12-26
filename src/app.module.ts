import { Module } from '@nestjs/common';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { PostController } from './post/post.controller';
import { UserController } from './user/user.controller';
import { EncryptionService } from './encription.service';

@Module({
  imports: [],
  controllers: [CommentController, PostController, UserController],
  providers: [PostService, UserService, PrismaService, CommentService, EncryptionService]
})
export class AppModule { }
