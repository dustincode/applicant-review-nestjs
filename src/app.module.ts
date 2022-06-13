import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicantController } from './controllers/applicant.controller';
import { ApplicantService } from './services/applicant.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationPipe } from './pipes/validation.pipe';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'admin123',
            database: 'applicant_service_nestjs',
            entities: ['entities/*.ts'],
            migrations: ['migrations/*.ts'],
            autoLoadEntities: true,
        }),
    ],
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
