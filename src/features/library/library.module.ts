import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';

@Module({
  controllers: [CategoryController],
})
export class LibraryModule {
}
