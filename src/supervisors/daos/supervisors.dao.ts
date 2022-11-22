import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSupervisorDto } from '../dto/create-supervisor.dto';
import { SupervisorResponseDto } from '../dto/response-supervisors.dto';
import { UpdateSupervisorDto } from '../dto/update-supervisor.dto';
import { Supervisor } from '../entities/supervisor.entity';

@Injectable()
export class SupervisorDao {
  constructor(
    @InjectModel(Supervisor) private supervisorModel: typeof Supervisor,
  ) {}

  async create(dto: CreateSupervisorDto): Promise<string> {
    const supervisor = await this.supervisorModel.create({ ...dto });

    return supervisor.id;
  }

  async update(id: string, columns: UpdateSupervisorDto): Promise<void> {
    await this.supervisorModel.update(columns, { where: { id } });
  }

  async findById(id: string): Promise<SupervisorResponseDto> {
    return await this.supervisorModel.findByPk(id);
  }

  async findAll(): Promise<SupervisorResponseDto[]> {
    return await this.supervisorModel.findAll();
  }

  async delete(id: string): Promise<void> {
    await this.supervisorModel.destroy({ where: { id } });
  }
}
