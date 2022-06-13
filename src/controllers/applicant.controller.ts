import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Res,
} from '@nestjs/common';
import { ApplicantDto } from '../dto/applicant.dto';
import { ApplicantService } from '../services/applicant.service';
import { Response } from 'express';

@Controller('/api/applicants')
export class ApplicantController {
    constructor(private applicantService: ApplicantService) {}

    @Get(':applicantId')
    async getApplicant(@Param('applicantId', ParseIntPipe) applicantId: number) {
        return this.applicantService.getApplicant(applicantId);
    }

    @Get()
    async getApplicants(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.NO_CONTENT).send();
    }

    @Post()
    async createApplicant(@Body() request: ApplicantDto) {
        return this.applicantService.createApplicant(request);
    }

    @Delete(':applicantId')
    async deleteApplicant(@Param('applicantId', ParseIntPipe) applicantId: number) {
        return this.applicantService.deleteApplicant(applicantId);
    }
}
