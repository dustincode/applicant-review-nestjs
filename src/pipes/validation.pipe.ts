import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

function removeProperties(error: ValidationError) {
    delete error['target'];
    delete error['value'];
    if (error?.children?.length > 0) {
        error.children.forEach(removeProperties);
    }
}

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata) {
        if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
            return value;
        }

        const object = plainToClass(metadata.metatype, value);
        const errors = await validate(object);

        if (errors.length === 0) return value;

        errors.forEach(removeProperties);
        throw new BadRequestException(errors);
    }

    private toValidate(metaType: Function) {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metaType);
    }
}
