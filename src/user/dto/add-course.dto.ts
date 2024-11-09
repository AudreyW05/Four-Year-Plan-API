// src/user/dto/add-course.dto.ts

import { IsString, IsNotEmpty } from 'class-validator';

export class AddCourseDto {
  @IsString()
  @IsNotEmpty()
  courseCode: string;
}
