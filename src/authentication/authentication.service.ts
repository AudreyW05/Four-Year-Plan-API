import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt'; //run npm i bcrypt, npm i @types/bcrypt

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

  async signUp(signupData: SignupDto): Promise<any> {
    const { id, name, password } = signupData
    //check if email is in use
    const emailInUse = await this.userService.findEmail(name);//may lead to errors, as findEmail function only needs the email for checking existence, modify your signUp function to pass the email property from the signupData object directly

    if (emailInUse){
      throw new BadRequestException('Email already in use');
    }

    //hash password
    const hashedPassword =  await bcrypt.hash(password, 10); //2nd parameter is number of rounds in algorithm to make more secure

    //create user document and save in database
    await this.userService.create({
      name,//no id bc in user/dto/create-user.dto.ts, id is not defined as a parameter
      password: hashedPassword,
    });
  }

  async confirmEmail(): Promise<any> {}

  async setPassword(): Promise<any> {}

  async resetPassword(): Promise<any> {}

  async forgetPasswordEmail(): Promise<any> {}
}
