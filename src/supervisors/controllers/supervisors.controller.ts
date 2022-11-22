import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSupervisorDto } from '../dto/create-supervisor.dto';
import { UpdateSupervisorDto } from '../dto/update-supervisor.dto';
import { SupervisorsService } from '../services/supervisors.service';

@ApiTags('Supervisors')
@Controller('supervisors')
export class SupervisorsController {
  constructor(private readonly supervisorsService: SupervisorsService) {}

  @Get()
  findAll() {
    return this.supervisorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supervisorsService.findById(id);
  }

  @Post()
  create(@Body() createSupervisorDto: CreateSupervisorDto) {
    return this.supervisorsService.create(createSupervisorDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupervisorDto: UpdateSupervisorDto,
  ) {
    return this.supervisorsService.update(id, updateSupervisorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supervisorsService.remove(id);
  }
}
