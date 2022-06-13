import { ProjectDto } from './project.dto';
import { ArrayNotEmpty, IsEmail, Length, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ApplicantDto {
    @IsEmail({}, { message: 'The email is invalid format' })
    @MaxLength(255, { message: 'The email is invalid length' })
    email: string;

    @Length(1, 255, { message: 'The name is invalid length' })
    name: string;

    @Length(1, 255, { message: 'The github username is invalid length' })
    githubUser: string;

    @ArrayNotEmpty({ message: 'The past project must be at least 1 project' })
    @ValidateNested({ each: true })
    @Type(() => ProjectDto)
    pastProjects: ProjectDto[];
}
