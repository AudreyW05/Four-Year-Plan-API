// src/course/course.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.courseService.findOne(code);
  }

  @Put(':code')
  update(
    @Param('code') code: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.update(code, updateCourseDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.courseService.remove(code);
  }
}
