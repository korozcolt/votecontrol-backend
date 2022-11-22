import { Test, TestingModule } from '@nestjs/testing';

import { SupervisorsController } from './supervisors.controller';
import { SupervisorsService } from '../services/supervisors.service';

describe('SupervisorsController', () => {
  let controller: SupervisorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupervisorsController],
      providers: [SupervisorsService],
    }).compile();

    controller = module.get<SupervisorsController>(SupervisorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
