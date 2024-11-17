import { IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?+.*[0-9])/, {
    message: 'Password must contain at least one number',
  })
  newPassword: string;
}
