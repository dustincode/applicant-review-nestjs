import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Applicant } from './applicant.entity';

export enum EmploymentMode {
    FREELANCE = 'Freelance',
    EMPLOYED = 'Employed',
}

export enum CapacityMode {
    PART_TIME = 'Part time',
    FULL_TIME = 'Full time',
}

@Entity('project')
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 255,
    })
    name: string;

    @Column({
        name: 'employed_mode',
        type: 'enum',
        enum: EmploymentMode,
        default: EmploymentMode.FREELANCE,
    })
    employmentMode: EmploymentMode;

    @Column({
        name: 'capacity_mode',
        type: 'enum',
        enum: CapacityMode,
        default: CapacityMode.FULL_TIME,
    })
    capacity: CapacityMode;

    @Column({
        name: 'duration_in_months',
        type: 'int',
    })
    durationInMonths: number;

    @Column({
        name: 'start_year',
        type: 'int',
    })
    startYear: number;

    @Column({
        name: 'role',
        type: 'varchar',
        length: '255',
    })
    role: string;

    @Column({
        name: 'team_size',
        type: 'int',
    })
    teamSize: number;

    @Column({
        name: 'repository_url',
        type: 'varchar',
        length: '500',
        nullable: true,
    })
    repositoryUrl?: string;

    @Column({
        name: 'live_product_url',
        type: 'varchar',
        length: '500',
        nullable: true,
    })
    liveProductUrl?: string;

    @ManyToOne(() => Applicant, (applicant) => applicant.projects, {
        cascade: false,
    })
    @JoinColumn({ name: 'fk_applicant_id', referencedColumnName: 'id' })
    applicant: Applicant;
}
