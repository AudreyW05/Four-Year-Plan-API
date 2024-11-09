import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(private prisma: PrismaService) {}

  async signIn(id: number, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
