import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class SignInDto {
  
  @IsEmail()
  name: string; //email

  @IsString()
  @IsNotEmpty()
  password: string;
}
