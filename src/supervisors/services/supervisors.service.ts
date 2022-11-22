import * as exceptions from '../../utils/exceptions/json-exceptions/supervisors-exceptions.json';

import { CreateSupervisorDto } from '../dto/create-supervisor.dto';
import { ErrorException } from 'src/utils/exceptions/error-response.exception';
import { Injectable } from '@nestjs/common';
import { SupervisorDao } from '../daos/supervisors.dao';
import { UpdateSupervisorDto } from '../dto/update-supervisor.dto';
@Injectable()
export class SupervisorsService {
  constructor(private readonly supervisorsDao: SupervisorDao) {}

  async create(_createSupervisorDto: CreateSupervisorDto): Promise<string> {
    try {
      return await this.supervisorsDao.create(_createSupervisorDto);
    } catch (err) {
      const { code, error } = exceptions['6000'];
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  findAll() {
    return this.supervisorsDao.findAll();
  }

  findById(id: string) {
    try {
      return this.supervisorsDao.findById(id);
    } catch (err) {
      const { code, error } = exceptions['6001'];
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  update(id: string, _updateSupervisorDto: UpdateSupervisorDto) {
    try {
      return this.supervisorsDao.update(id, _updateSupervisorDto);
    } catch (err) {
      const { code, error } = exceptions['6001'];
      throw new ErrorException(code, error, [err?.message]);
    }
  }

  remove(id: string) {
    try {
      return this.supervisorsDao.delete(id);
    } catch (err) {
      const { code, error } = exceptions['6001'];
      throw new ErrorException(code, error, [err?.message]);
    }
  }
}
