import { CreateSupervisorDto } from './create-supervisor.dto';
import { IntersectionType } from '@nestjs/swagger';

class SupervisorIdResponse {
  id: string;
}

export class SupervisorResponseDto extends IntersectionType(
  SupervisorIdResponse,
  CreateSupervisorDto,
) {}
