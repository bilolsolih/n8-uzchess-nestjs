import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://postgres:123@database:5432/uzchess_n8',
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
};