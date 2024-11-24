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
   * Delete a course to a specific user without checking prequisites
   * @param id - User ID
   * @param addCourseDto - Course code to add
   */
  @Delete(':id/delete-course')
  deleteCourseToUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteCourseDto: DeleteCourseDto,
  ) {
    return this.userService.deleteCourseToUser(id, deleteCourseDto.courseCode);
  }

  /**
   * Get all users with course prerequisite analysis.
   */
  @UseGuards(AuthGuard)
  @Get('getSelf')
  getSelf(@Request() req): Promise<UserWithCourseAnalysis[]> {
    return this.userService.getSelf(req.user);
  }

  /**
   * Get all users with course prerequisite analysis.
   */
  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<UserWithCourseAnalysis[]> {
    return this.userService.findAll();
  }

  /**
   * Get a single user by ID with course prerequisite analysis.
   * @param id - User ID
   */
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserWithCourseAnalysis> {
    return this.userService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
