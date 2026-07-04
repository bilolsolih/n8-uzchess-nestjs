import {Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse} from '@nestjs/swagger';
import {CreateCategoryRequest} from './commands/create-category/create-category.request';
import {UpdateCategoryRequest} from './commands/update-category/update-category.request';
import {CommandBus, QueryBus} from '@nestjs/cqrs';
import {GetAllCategoriesRequest} from './queries/get-all-categories/get-all-categories.request';
import {GetAllCategoriesResponse} from "./queries/get-all-categories/get-all-categories.response";
import {PaginatedResultDto} from "@/features/common/dtos/paginated-result.dto";
import {Roles} from "@core/decorators/roles.decorator";
import {Role} from "@core/enums/role.enum";

@Controller('categories')
@ApiBearerAuth()
export class CategoryController {
    constructor(
        private cmdBus: CommandBus,
        private queryBus: QueryBus,
    ) {
    }

    @Get('list')
    @ApiOkResponse({type: PaginatedResultDto(GetAllCategoriesResponse)})
    @Roles(Role.Admin)
    async getAll(@Query() filters: GetAllCategoriesRequest) {
        return await this.queryBus.execute(filters.toQuery());
    }

    @Post('create')
    @Roles(Role.Admin, Role.User)
    async create(@Body() payload: CreateCategoryRequest) {
        return await this.cmdBus.execute(payload.toCommand());
    }

    @Patch('update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryRequest) {
        return await this.cmdBus.execute(payload.toCommand(id));
    }
}