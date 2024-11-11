import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(id: number, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(id);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    //returns a JWT made of user properties and a access_token property.
    const payload = { id: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(): Promise<any> {}

  async confirmEmail(): Promise<any> {}

  async changePassword(
    userId,
    oldPassword: string,
    newPassword: string,
  ): Promise<any> {
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException('User not found...');
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Wrong credentials');
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: newHashedPassword,
      },
    });
  }
  async forgotPassword(email: string): Promise<any> {
    const userId = await this.userService.findEmail(email);
    const user = await this.userService.findOne(userId);
  }

  async resetPassword(): Promise<any> {}
}
