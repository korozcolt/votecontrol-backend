import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

import { BaseExceptionFilter } from '@nestjs/core';
import { InternalErrorException } from './internal-error.exception';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const defaultMessage =
      exception instanceof InternalErrorException
        ? exception.message
        : 'Internal Server Error';

    const errorJson = {
      statusCode: status,
      message: defaultMessage,
    };

    if (exception instanceof HttpException) {
      errorJson['statusCode'] = exception.getResponse()['statusCode'];
      errorJson['error'] = exception.getResponse()['error'];
      errorJson['message'] = exception.getResponse()['message'];
    }

    if (
      !(exception instanceof HttpException) &&
      !(exception instanceof InternalErrorException)
    ) {
      this.logger.error(`Unhandled Error Trace: ${exception}`);
    }

    response.status(status).json(errorJson);
  }
}
