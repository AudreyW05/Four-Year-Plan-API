// src/user/user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddCourseDto } from './dto/add-course.dto';
import {
  UserWithCourseAnalysis,
  CourseWithPrerequisiteStatus,
} from './user.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  /**
   * Find all users with course prerequisite analysis.
   */
  async findAll(): Promise<UserWithCourseAnalysis[]> {
    const users = await this.prisma.user.findMany({
      include: { Has: { include: { Course: true } } },
    });

    const result: UserWithCourseAnalysis[] = [];

    for (const user of users) {
      const courseCodes = user.Has.map((has) => has.Course.code);
      const courses = user.Has.map((has) => has.Course);
      const courseAnalysis: CourseWithPrerequisiteStatus[] = [];

      for (const course of courses) {
        const prereqs = await this.prisma.preReq.findMany({
          where: { courseCode: course.code },
        });

        const prereqCodes = prereqs.map((pr) => pr.preReqCode);

        const hasPrereqs = prereqCodes.every((prCode) =>
          courseCodes.includes(prCode),
        );

        const missingPrereqs = prereqCodes.filter(
          (prCode) => !courseCodes.includes(prCode),
        );

        courseAnalysis.push({
          code: course.code,
          credits: course.credits,
          prerequisitesFulfilled: hasPrereqs,
          ...(hasPrereqs ? {} : { missingPrerequisites: missingPrereqs }),
        });
      }

      result.push({
        id: user.id,
        name: user.name,
        password: user.password,
        courses: courseAnalysis,
      });
    }

    return result;
  }

   /**
   * See if user exists by email.
   * @param name - User email
   */
   async findEmail(name: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { //if where throws error, its bc findUnique expects int id, so might have to use findFirst method instead
        name,
      },
    });
    return !!user;
  }

  /**
   * Find one user by ID with course prerequisite analysis.
   * @param id - User ID
   */
  async findOne(id: number): Promise<UserWithCourseAnalysis> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { Has: { include: { Course: true } } },
    });

    if (!user) throw new NotFoundException(`User with ID ${id} not found`);

    const courseCodes = user.Has.map((has) => has.Course.code);
    const courses = user.Has.map((has) => has.Course);
    const courseAnalysis: CourseWithPrerequisiteStatus[] = [];

    for (const course of courses) {
      const prereqs = await this.prisma.preReq.findMany({
        where: { courseCode: course.code },
      });

      const prereqCodes = prereqs.map((pr) => pr.preReqCode);

      const hasPrereqs = prereqCodes.every((prCode) =>
        courseCodes.includes(prCode),
      );

      const missingPrereqs = prereqCodes.filter(
        (prCode) => !courseCodes.includes(prCode),
      );

      courseAnalysis.push({
        code: course.code,
        credits: course.credits,
        prerequisitesFulfilled: hasPrereqs,
        ...(hasPrereqs ? {} : { missingPrerequisites: missingPrereqs }),
      });
    }

    return {
      id: user.id,
      name: user.name,
      password: user.password,
      courses: courseAnalysis,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  /**
   * Add a course to a user without checking prerequisites.
   * @param userId - User ID
   * @param courseCode - Course Code to add
   */
  async addCourseToUser(userId: number, courseCode: string) {
    // Check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { Has: { include: { Course: true } } },
    });

    if (!user) throw new NotFoundException(`User with ID ${userId} not found`);

    // Check if course exists
    const course = await this.prisma.course.findUnique({
      where: { code: courseCode },
    });

    if (!course)
      throw new NotFoundException(`Course with code ${courseCode} not found`);

    // Check if user already has the course
    const existingHas = await this.prisma.has.findUnique({
      where: {
        courseCode_userId: {
          courseCode,
          userId,
        },
      },
    });

    if (existingHas) {
      throw new NotFoundException(`User already has course ${courseCode}`);
    }

    // Add the course to the user
    const addedCourse = await this.prisma.has.create({
      data: {
        courseCode,
        userId,
      },
    });

    return addedCourse;
  }
}
