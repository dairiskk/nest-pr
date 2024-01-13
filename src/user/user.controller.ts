import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dtos';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() userData: CreateUserDto): Promise<User> | null {
    return this.userService.createUser(userData);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() userData: CreateUserDto) {
    return this.authService.signIn(userData.email, userData.password);
  }
}
