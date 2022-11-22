import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Supervisor } from './entities/supervisor.entity';
import { SupervisorDao } from './daos/supervisors.dao';
import { SupervisorsController } from './controllers/supervisors.controller';
import { SupervisorsService } from './services/supervisors.service';

@Module({
  imports: [SequelizeModule.forFeature([Supervisor])],
  controllers: [SupervisorsController],
  providers: [SupervisorsService, SupervisorDao],
  exports: [SupervisorsService, SupervisorDao],
})
export class SupervisorsModule {}
