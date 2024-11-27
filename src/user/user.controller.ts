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
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddCourseDto } from './dto/add-course.dto';
import { DeleteCourseDto } from './dto/delete-course.dto';
import { UserWithCourseAnalysis } from './user.interface';
import { AuthGuard } from '../authentication/authentication.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return { data: user };
  }

  /**
   * Add a course to a specific user without checking prerequisites.
   * @param id - User ID
   * @param addCourseDto - Course code to add
   */
  @Post(':id/add-course')
  async addCourseToUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() addCourseDto: AddCourseDto,
  ) {
    const course = await this.userService.addCourseToUser(id, addCourseDto.courseCode, addCourseDto.year, addCourseDto.quarter);
    return { data: course };
  }

  /**
   * Delete a course to a specific user without checking prequisites
   * @param id - User ID
   * @param addCourseDto - Course code to add
   */
  @Delete(':id/delete-course')
  async deleteCourseToUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteCourseDto: DeleteCourseDto,
  ) {
    const course = await this.userService.deleteCourseToUser(id, deleteCourseDto.courseCode);
    return { data: course };
  }

  /**
   * Get all users with course prerequisite analysis.
   */
  @UseGuards(AuthGuard)
  @Get('getSelf')
  async getSelf(@Request() req) {
    const self = await this.userService.getSelf(req.user);
    return { data: self };
  }

  /**
   * Get all users with course prerequisite analysis.
   */
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const all = await this.userService.findAll();
    return { data: all };
  }

  /**
   * Get a single user by ID with course prerequisite analysis.
   * @param id - User ID
   */
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const one = await this.userService.findOne(id);
    return { data: one };
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.userService.update(id, updateUserDto);
    return { data: user };
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.remove(id);
    return { data: user };
  }
}
