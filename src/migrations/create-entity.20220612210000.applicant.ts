import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEntity20220612210000Applicant implements MigrationInterface {
    async down(queryRunner: QueryRunner): Promise<any> {
        return Promise.resolve(undefined);
    }

    async up(queryRunner: QueryRunner): Promise<any> {
        return Promise.resolve(undefined);
    }
}
