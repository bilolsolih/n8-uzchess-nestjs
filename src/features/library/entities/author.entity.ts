import { Column, Entity } from 'typeorm';
import { BaseModel } from '@core/base.model';

@Entity('authors')
export class Author extends BaseModel {
  @Column({ length: 64 })
  fullName: string;
}
