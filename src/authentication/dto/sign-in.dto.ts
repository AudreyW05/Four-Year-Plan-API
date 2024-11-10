import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}
