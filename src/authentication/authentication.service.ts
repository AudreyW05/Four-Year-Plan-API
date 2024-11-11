import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(id: number, pass: string): Promise<{ access_token: string}> {
    const user = await this.userService.findOne(id);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    //returns a JWT made of user properties and a access_token property.
    const payload = { id: user.id, username: user.name};
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
    ;
  }

  async signUp(): Promise<any> {}

  async confirmEmail(): Promise<any> {}

  async setPassword(): Promise<any> {}

  async resetPassword(): Promise<any> {}

  async forgetPasswordEmail(): Promise<any> {}
}
