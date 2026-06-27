import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://postgres:123@localhost:5432/dars605',
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: '123',
  // database: 'dars605',
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
};