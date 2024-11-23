import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './authentication.guard'
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignupDto } from './dto/sign-up.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  

  //POST login
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authenticationService.signIn(signInDto.email, signInDto.password);
  } 

  //JWT authguard route protection, probably not needed as we wont be retrieving profile this way
  @UseGuards(AuthGuard)
  @Get('profile') //endpoint
  getProfile(@Request() req) {
    return req.user;
  }

  // POST signup
  @Post('signup')
  async signUp(@Body() signupData:  SignupDto) {
    return this.authenticationService.signUp(signupData)
  } 
}
