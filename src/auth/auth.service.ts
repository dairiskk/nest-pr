import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EncryptionService } from 'src/encription.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private encriptionService: EncryptionService,
  ) {}

  async signIn(useremail: string, userpassword: string) {
    const user = await this.usersService.findByEmail({ email: useremail });

    if (
      user &&
      (await this.encriptionService.comparePasswords(
        userpassword,
        user.password,
      ))
    ) {
      const payload = { sub: user.id, email: user.email };
      return {
        id: user.id,
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
