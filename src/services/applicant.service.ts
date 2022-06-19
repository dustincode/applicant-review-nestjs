import { Injectable } from '@nestjs/common';
import { ApplicantDto } from 'dto/applicant.dto';

@Injectable()
export class ApplicantService {
    getApplicants() {
        return '';
    }

    getApplicant(applicantId: number) {
        return `${applicantId}`;
    }

    createApplicant(applicantDto: ApplicantDto) {
        return `Create applicant ${applicantDto}`;
    }

    deleteApplicant(applicantId: number) {
        return `${applicantId}`;
    }
}
