import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

export interface ResponseErrorBody {
    statusCode: number;
    timestamp: number;
    message: string;
    error?: any;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: HttpException, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();

        const responseBody: ResponseErrorBody = {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            timestamp: new Date().getTime(),
            message: exception.message,
        };

        if (exception instanceof HttpException) {
            responseBody.statusCode = exception.getStatus();
            responseBody.error = (exception.getResponse() as Object)?.['message'];
        } else {
            responseBody.message = 'Internal Server Error';
        }

        httpAdapter.reply(ctx.getResponse(), responseBody, responseBody.statusCode);
    }
}
