// src/user/user.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddCourseDto } from './dto/add-course.dto';
import { UserWithCourseAnalysis } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * Add a course to a specific user without checking prerequisites.
   * @param id - User ID
   * @param addCourseDto - Course code to add
   */
  @Post(':id/add-course')
  addCourseToUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() addCourseDto: AddCourseDto,
  ) {
    return this.userService.addCourseToUser(id, addCourseDto.courseCode);
  }

  /**
   * Get all users with course prerequisite analysis.
   */
  @Get()
  findAll(): Promise<UserWithCourseAnalysis[]> {
    return this.userService.findAll();
  }

  /**
   * Get a single user by ID with course prerequisite analysis.
   * @param id - User ID
   */
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserWithCourseAnalysis> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
