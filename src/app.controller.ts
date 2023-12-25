import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { User as UserModel, Post as PostModel, Comment } from '@prisma/client';
import { PostService } from './post/post.service';
import { CommentService } from './comment/comment.service';

@Controller()
export class AppController {

}