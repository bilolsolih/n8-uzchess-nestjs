import {Module} from '@nestjs/common';
import {CategoryController} from './category/category.controller';
import {CreateCategoryHandler} from '@/features/library/category/commands/create-category/create-category.handler';
import {UpdateCategoryHandler} from '@/features/library/category/commands/update-category/update-category.handler';
import {CreateAuthorHandler} from '@/features/library/author/commands/create-author/create-author.handler';
import {AuthorController} from '@/features/library/author/author.controller';
import {GetAllCategoriesHandler} from './category/queries/get-all-categories/get-all-categories.handler';
import {DifficultyController} from "@/features/library/difficulty/difficulty.controller";
import {
    CreateDifficultyHandler
} from "@/features/library/difficulty/commands/create-difficulty/create-difficulty.handler";
import {
    GetAllDifficultiesHandler
} from "@/features/library/difficulty/queries/get-all-difficulties/get-all-difficulties.handler";

@Module({
    controllers: [
        CategoryController,
        AuthorController,
        DifficultyController
    ],
    providers: [
        CreateCategoryHandler,
        UpdateCategoryHandler,
        CreateAuthorHandler,
        GetAllCategoriesHandler,
        CreateDifficultyHandler,
        GetAllDifficultiesHandler
    ],
})
export class LibraryModule {
}
