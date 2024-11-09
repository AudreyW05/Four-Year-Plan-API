// src/course/dto/create-course.dto.ts
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsInt()
  credits: number;
}
