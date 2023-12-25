import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';


@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    async signupUser(
        @Body() userData: { name?: string; email: string },
    ): Promise<User> | null {
        return this.userService.createUser(userData);
    }

    @Get()
    async getAll(
    ): Promise<User[]> | null {
        return this.userService.users({});
    }
}
