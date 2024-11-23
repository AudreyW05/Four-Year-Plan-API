import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class SignInDto {
  
  @IsEmail()
  email: string; //email

  @IsString()
  @IsNotEmpty()
  password: string;
}
