import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { CreateCategoryHandler } from '@/features/library/category/commands/create-category/create-category.handler';
import { UpdateCategoryHandler } from '@/features/library/category/commands/update-category/update-category.handler';
import { CreateAuthorHandler } from '@/features/library/author/commands/create-author/create-author.handler';
import { AuthorController } from '@/features/library/author/author.controller';
import { GetAllCategoriesHandler } from './category/queries/get-all-categories/get-all-categories.handler';

@Module({
  controllers: [CategoryController, AuthorController],
  providers: [
    CreateCategoryHandler,
    UpdateCategoryHandler,
    CreateAuthorHandler,
    GetAllCategoriesHandler,
  ],
})
export class LibraryModule {
}
