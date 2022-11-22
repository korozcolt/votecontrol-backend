import {
  Column,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { UUIDV4 } from 'sequelize';

@Table({ timestamps: true })
export class User extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column
  phone: string;

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
