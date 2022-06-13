import { IsIn, IsNotEmpty, Length, Max, Min } from 'class-validator';

export class ProjectDto {
    @Length(1, 255, { message: 'The name is invalid length' })
    name: string;

    @IsIn(['freelance', 'employed'], { message: 'The employment mode is invalid mode' })
    @IsNotEmpty({ message: 'The employment mode is required' })
    employmentMode: 'freelance' | 'employed';

    @IsIn(['part_time', 'full_time'], { message: 'The capacity is invalid mode' })
    @IsNotEmpty({ message: 'The employment mode is required' })
    capacity: 'part_time' | 'full_time';

    @Min(1, { message: 'The duration must have minimum is 1' })
    @Max(31, { message: 'The duration must have maximum is 31' })
    durationInMonths: number;

    @Min(1974, { message: 'The start year must be >= 1974' })
    @Max(9999, { message: 'The start year must be <= 9999' })
    startYear: number;

    @Length(1, 255, { message: 'The role is invalid length' })
    role: string;

    @Min(1, { message: 'The team size must be >= 1' })
    @Max(1000, { message: 'The team size must be <= 1000' })
    teamSize: number;

    repositoryUrl?: string;
    liveProductUrl?: string;
}
