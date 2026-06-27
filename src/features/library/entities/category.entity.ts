import { Column, Entity } from 'typeorm';
import { BaseModel } from '@core/base.model';

@Entity('categories')
export class Category extends BaseModel {
  @Column({ length: 64, unique: true })
  title: string;
}
