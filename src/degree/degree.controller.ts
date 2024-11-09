// src/degree/degree.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DegreeService } from './degree.service';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';

@Controller('degrees')
export class DegreeController {
  constructor(private readonly degreeService: DegreeService) {}

  @Post()
  create(@Body() createDegreeDto: CreateDegreeDto) {
    return this.degreeService.create(createDegreeDto);
  }

  @Get()
  findAll() {
    return this.degreeService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.degreeService.findOne(name);
  }

  @Put(':name')
  update(
    @Param('name') name: string,
    @Body() updateDegreeDto: UpdateDegreeDto,
  ) {
    return this.degreeService.update(name, updateDegreeDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.degreeService.remove(name);
  }
}
