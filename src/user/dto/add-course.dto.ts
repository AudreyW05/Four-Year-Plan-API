// src/user/dto/add-course.dto.ts

import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AddCourseDto {
  @IsString()
  @IsNotEmpty()
  courseCode: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  quarter: number;
}
