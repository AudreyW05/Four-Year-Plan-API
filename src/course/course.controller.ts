// src/course/course.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from 'src/authentication/authentication.guard';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.courseService.findOne(code);
  }

  @UseGuards(AuthGuard)
  @Put(':code')
  update(
    @Param('code') code: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.update(code, updateCourseDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.courseService.remove(code);
  }
}
