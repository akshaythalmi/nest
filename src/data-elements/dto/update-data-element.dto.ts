import { PartialType } from '@nestjs/mapped-types';
import { CreateDataElementDto } from './create-data-element.dto';

export class UpdateDataElementDto extends PartialType(CreateDataElementDto) {}
