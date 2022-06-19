import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('applicant')
export class Applicant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'email',
        type: 'varchar',
        length: 255,
        unique: true,
    })
    email: string;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 100,
    })
    name: string;

    @Column({
        name: 'github_url',
        type: 'varchar',
        length: 100,
    })
    githubUser: string;
}
