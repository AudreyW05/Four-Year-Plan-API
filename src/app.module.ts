// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { DegreeModule } from './degree/degree.module';

@Module({
  imports: [PrismaModule, UserModule, CourseModule, DegreeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
