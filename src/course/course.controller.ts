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
  async create(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.courseService.create(createCourseDto);
    return { data: course };
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const all = await this.courseService.findAll();
    return { data: all };
  }

  @UseGuards(AuthGuard)
  @Get(':code')
  async findOne(@Param('code') code: string) {
    const one = await this.courseService.findOne(code);
    return { data: one };
  }

  @UseGuards(AuthGuard)
  @Put(':code')
  async update(
    @Param('code') code: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    const degree = await this.courseService.update(code, updateCourseDto);
    return { data: degree };
  }

  @UseGuards(AuthGuard)
  @Delete(':code')
  async remove(@Param('code') code: string) {
    const degree = await this.courseService.remove(code);
    return { data: degree };
  }
}
