import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async signIn(id: number, pass: string): Promise<any> {
    const user = await this.userService.findOne(id);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
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
