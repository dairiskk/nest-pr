import { Body, Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';


@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {
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
        return this.authService.signIn(userData.email, userData.password)
    }

}
