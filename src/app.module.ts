import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from 'configs/data-source.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicantController } from './controllers/applicant.controller';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ValidationPipe } from './pipes/validation.pipe';
import { ApplicantService } from './services/applicant.service';

@Module({
    imports: [TypeOrmModule.forRoot(DataSourceConfig)],
    controllers: [AppController, ApplicantController],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
        AppService,
        ApplicantService,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware, AuthMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
