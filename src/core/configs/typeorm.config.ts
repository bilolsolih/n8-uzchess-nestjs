import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://postgres:123@localhost:5432/dars605',
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
};