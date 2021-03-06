import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DataSourceConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'applicant_service',
    entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
    synchronize: true,
};
