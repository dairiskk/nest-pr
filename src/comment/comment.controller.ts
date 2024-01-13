import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dtos';

@UseGuards(AuthGuard)
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getAllComments(): Promise<Comment[]> {
    return this.commentService.getAll();
  }

  @Post()
  async createComment(@Body() commentData: CreateCommentDto): Promise<Comment> {
    return this.commentService.create(commentData);
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string): Promise<Comment> {
    return this.commentService.findById({ id: Number(id) });
  }
  @Get('user/:id')
  async getUserId(@Param('id') id: string): Promise<Comment[] | null> {
    return this.commentService.comments({ where: { authorId: Number(id) } });
  }
}
