import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt'; //run npm i bcrypt, npm i @types/bcrypt
import { v4 as uuidv4 } from 'uuid'; //run npm install uuid

@Injectable()
export class AuthenticationService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService
    
  ) {}

  async signIn(email: string, pass: string) {

    const user = await this.userService.findUserByEmail(email);

    //compare pw with existing pw, bcrypt decrypts given password and compares it to pw stored in database
    const passwordMatch = await bcrypt.compare(pass, user.password)
    if(!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials: wrong password');//probably shlould not do this bc hackers can determine what emails exist in db 
    } 
    //returns a JWT made of user properties and a access_token property.
    const payload = { id: user.id, username: user.email};
    const tokens = this.generateUserTokens(payload)
    return  this.generateUserTokens(payload)
    // {
    //   access: (await tokens).accessToken,
    //   refresh: (await tokens).refreshToken
    // }
    
    ;
  }
  async generateUserTokens(payload){
    const accessToken = await this.jwtService.signAsync(payload);
    
    return{
      accessToken,
      
    };
  }

  async signUp(signupData: SignupDto): Promise<any> {
    const { email, password } = signupData
    //check if email is in use
    const emailInUse = await this.userService.findEmail(email);//may lead to errors, as findEmail function only needs the email for checking existence, modify your signUp function to pass the email property from the signupData object directly

    if (emailInUse){
      throw new BadRequestException('Email already in use');
    }

    //hash password 
    const hashedPassword =  await bcrypt.hash(password, 10); //2nd parameter is number of rounds in algorithm to make more secure, need await bc bcrypt happens asynchronously and may not finish before we create user doc

    //create user document and save in database
    await this.userService.create({
      email,//no id bc in user/dto/create-user.dto.ts, id is not defined as a parameter
      password: hashedPassword,
    });
  }

  async confirmEmail(): Promise<any> {}

  async setPassword(): Promise<any> {}

  async resetPassword(): Promise<any> {}

  async forgetPasswordEmail(): Promise<any> {}
}
