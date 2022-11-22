import { CreateSupervisorDto } from './create-supervisor.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSupervisorDto extends PartialType(CreateSupervisorDto) {}
