import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

const UNKNOWN_ERROR = 'Произошла неожиданная ошибка';

@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorResponse = exception instanceof HttpException
      ? exception.getResponse()
      : UNKNOWN_ERROR;
    const errorMessage = typeof errorResponse === 'object' && errorResponse.hasOwnProperty('message')
      ? (errorResponse as { message: any }).message
      : errorResponse
    
    response.status(status).json({
      success: 0,
      error: errorMessage,
    });
  }
}
