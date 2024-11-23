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
  create(@Body() createDegreeDto: CreateDegreeDto) {
    return this.degreeService.create(createDegreeDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.degreeService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.degreeService.findOne(name);
  }

  @UseGuards(AuthGuard)
  @Put(':name')
  update(
    @Param('name') name: string,
    @Body() updateDegreeDto: UpdateDegreeDto,
  ) {
    return this.degreeService.update(name, updateDegreeDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.degreeService.remove(name);
  }
}
