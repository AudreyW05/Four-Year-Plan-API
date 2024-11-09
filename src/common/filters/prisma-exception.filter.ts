import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.BAD_REQUEST;
    let message = exception.message;

    // Customize based on error code
    if (exception.code === 'P2002') {
      status = HttpStatus.CONFLICT;
      message = 'Unique constraint failed.';
    }

    response.status(status).json({
      statusCode: status,
      message,
      path: request.url,
    });
  }
}
