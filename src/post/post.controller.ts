import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreatePostDto } from './dtos';
import { PostService } from './post.service';

@UseGuards(AuthGuard)
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('feed')
  async getPublishedPosts(): Promise<PostModel[] | null> {
    return this.postService.posts({
      where: { published: true },
    });
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<PostModel | null> {
    return this.postService.post({ id: Number(id) });
  }

  @Get('user/:id')
  async getUserId(@Param('id') id: string): Promise<PostModel[] | null> {
    return this.postService.posts({ where: { authorId: Number(id) } });
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          // {
          //   content: { contains: searchString },
          // },
        ],
      },
    });
  }

  @Post()
  async createDraft(@Body() postData: CreatePostDto): Promise<PostModel> {
    const { title, content, authorId } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { id: authorId },
      },
    });
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
