import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity('applicant')
export class Applicant {
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

    @ManyToOne(() => Project, (project) => project.applicant, {
        cascade: true,
        eager: true,
        orphanedRowAction: 'delete',
    })
    projects: Project[];
}
