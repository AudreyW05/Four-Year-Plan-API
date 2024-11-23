import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow all CORS
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow all HTTP methods
    allowedHeaders: '*', // Allow all headers
  });

  app.useGlobalFilters(new PrismaExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
