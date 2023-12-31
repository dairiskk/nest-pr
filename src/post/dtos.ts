import { IsEmail, IsNotEmpty, isString } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    authorId: number;

    content?: string;
}