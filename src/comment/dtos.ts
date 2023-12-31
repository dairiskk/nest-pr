import { IsEmail, IsNotEmpty, isString } from "class-validator";

export class CreateCommentDto {
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    authorId: number;
    @IsNotEmpty()
    postId: number;
}