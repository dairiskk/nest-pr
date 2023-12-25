import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PostService, UserService, PrismaService, CommentService],
})
export class AppModule { }
