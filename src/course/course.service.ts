// src/course/course.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({
      data: createCourseDto,
    });
  }

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        Has: { include: { User: true } },
        Requires: { include: { Degree: true } },
        PreReq: true,
        Course: true,
      },
    });
  }

  async findOne(code: string) {
    const course = await this.prisma.course.findUnique({
      where: { code },
      include: {
        Has: { include: { User: true } },
        Requires: { include: { Degree: true } },
        PreReq: true,
        Course: true,
      },
    });
    if (!course)
      throw new NotFoundException(`Course with code ${code} not found`);
    return course;
  }

  async update(code: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { code },
      data: updateCourseDto,
    });
  }

  async remove(code: string) {
    return this.prisma.course.delete({
      where: { code },
    });
  }
}
