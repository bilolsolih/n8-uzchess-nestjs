import {Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query} from '@nestjs/common';
import {ApiBearerAuth} from '@nestjs/swagger';
import {CreateCategoryRequest} from '@/features/library/category/commands/create-category/create-category.request';
import {UpdateCategoryRequest} from '@/features/library/category/commands/update-category/update-category.request';
import {CommandBus, QueryBus} from '@nestjs/cqrs';
import {GetAllCategoriesRequest} from './queries/get-all-categories/get-all-categories.request';

@Controller('categories')
@ApiBearerAuth()
export class CategoryController {
    constructor(
        private cmdBus: CommandBus,
        private queryBus: QueryBus,
    ) {
    }

    @Get('list')
    async getAll(@Query() filters: GetAllCategoriesRequest) {
        return await this.queryBus.execute(filters.toQuery());
    }

    @Post('create')
    async create(@Body() payload: CreateCategoryRequest) {
        return await this.cmdBus.execute(payload.toCommand());
    }

    @Patch('update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryRequest) {
        return await this.cmdBus.execute(payload.toCommand(id));
    }
}