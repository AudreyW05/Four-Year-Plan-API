import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDegreeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
