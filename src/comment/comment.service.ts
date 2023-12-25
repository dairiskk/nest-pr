import { Injectable } from '@nestjs/common';
import { Comment, Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.CommentCreateInput): Promise<Comment | null> {
        return this.prisma.comment.create({
            data: data
        });
    }

    async getAll(): Promise<Comment[] | null> {
        return this.prisma.comment.findMany({

        });
    }

    async findById(where: Prisma.CommentWhereUniqueInput): Promise<Comment | null> {
        return this.prisma.comment.findUnique({
            where,
        });
    }
}