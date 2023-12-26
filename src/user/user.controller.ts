import { Body, Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';


@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post("register")
    async register(
        @Body() userData: { email: string, password: string },
    ): Promise<User> | null {
        return this.userService.createUser(userData);
    }

    @HttpCode(HttpStatus.OK)
    @Post("login")
    async login(@Body() userData: { email: string, password: string }) {
        return this.userService.user({ email: userData.email, password: userData.password });
    }

}
