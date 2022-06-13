import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEntity20220612210000Applicant implements MigrationInterface {
    async down(queryRunner: QueryRunner): Promise<any> {
        return Promise.resolve(undefined);
    }

    async up(queryRunner: QueryRunner): Promise<any> {
        console.log('asdhasiudhasui dhaiu hashdia ');
        await queryRunner.createTable(
            new Table({
                name: 'applicant',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true,
                        isGenerated: true,
                    },
                ],
            }),
            true
        );
        return Promise.resolve(undefined);
    }
}
