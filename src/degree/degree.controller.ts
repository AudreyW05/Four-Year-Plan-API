// src/degree/degree.controller.ts
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
import { DegreeService } from './degree.service';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';
import { AuthGuard } from 'src/authentication/authentication.guard';

@Controller('degrees')
export class DegreeController {
  constructor(private readonly degreeService: DegreeService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createDegreeDto: CreateDegreeDto) {
    const degree = await this.degreeService.create(createDegreeDto);
    return { data: degree };
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const all = await this.degreeService.findAll();
    return { data: all };
  }

  @UseGuards(AuthGuard)
  @Get(':name')
  async findOne(@Param('name') name: string) {
    const one = await this.degreeService.findOne(name);
    return { data: one };
  }

  @UseGuards(AuthGuard)
  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() updateDegreeDto: UpdateDegreeDto,
  ) {
    const degree = await this.degreeService.update(name, updateDegreeDto);
    return { data: degree };
  }

  @UseGuards(AuthGuard)
  @Delete(':name')
  async remove(@Param('name') name: string) {
    const degree = await this.degreeService.remove(name);
    return { data: degree };
  }
}
