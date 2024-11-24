// src/user/dto/add-course.dto.ts

import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteCourseDto {
  @IsString()
  @IsNotEmpty()
  courseCode: string;
}
