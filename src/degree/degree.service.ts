// src/degree/degree.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';

@Injectable()
export class DegreeService {
  constructor(private prisma: PrismaService) {}

  async create(createDegreeDto: CreateDegreeDto) {
    return this.prisma.degree.create({
      data: createDegreeDto,
    });
  }

  async findAll() {
    return this.prisma.degree.findMany({
      include: { Requires: { include: { Course: true } } },
    });
  }

  async findOne(name: string) {
    const degree = await this.prisma.degree.findUnique({
      where: { name },
      include: { Requires: { include: { Course: true } } },
    });
    if (!degree)
      throw new NotFoundException(`Degree with name ${name} not found`);
    return degree;
  }

  async update(name: string, updateDegreeDto: UpdateDegreeDto) {
    return this.prisma.degree.update({
      where: { name },
      data: updateDegreeDto,
    });
  }

  async remove(name: string) {
    return this.prisma.degree.delete({
      where: { name },
    });
  }
}
