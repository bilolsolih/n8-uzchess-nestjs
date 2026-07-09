import { BaseModel } from '@core/base.model';
import { Column, Entity } from 'typeorm';

@Entity('languages')
export class Language extends BaseModel {
  @Column({ length: 64, unique: true })
  title: string;

  @Column({ length: 6, unique: true })
  code: string;
}