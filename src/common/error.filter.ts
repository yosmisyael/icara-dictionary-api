import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class ErrorFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): any {
    const response = host.switchToHttp().getResponse<Response>();

    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).send({
        error: exception.getResponse(),
      });
    } else {
      response.status(500).send({
        error: 'An unknown server error occurred.',
      });
    }
  }
}