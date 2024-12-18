import { IsEmail, IsInt, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class SignupDto {

  

    @IsEmail()
    email: string; //email

    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{9,}$/, { message: 'Password must contain at least 8 characters, one number, and one special character'})//regex
    password: string;
//need to download packages to throw errors if a POST request is made that doesnt contain these fields: npm i --save class-validator class-transformer
}