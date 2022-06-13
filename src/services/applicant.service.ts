import { Injectable } from '@nestjs/common';
import { ApplicantDto } from '../dto/applicant.dto';

@Injectable()
export class ApplicantService {
    getApplicants() {
        return 'Get Applicants';
    }

    getApplicant(applicantId: number) {
        return `Get Applicant ${applicantId}`;
    }

    createApplicant(applicantDto: ApplicantDto) {
        return `Create applicant ${applicantDto}`;
    }

    deleteApplicant(applicantId: number) {
        return `Delete applicant ${applicantId}`;
    }
}
