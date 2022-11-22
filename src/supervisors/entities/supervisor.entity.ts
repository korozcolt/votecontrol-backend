import {
  Column,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { UUIDV4 } from 'sequelize';

@Table({ timestamps: true })
export class Supervisor extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  dni: string;

  @Column
  phone: string;

  @Column
  phoneTwo: string;

  @Column
  email: string;

  @Column
  address: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  country: string;

  @Default(true)
  @Column
  isActive: boolean;
}
