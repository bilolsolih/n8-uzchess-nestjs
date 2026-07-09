import {Body, Controller, Post} from '@nestjs/common';
import {CommandBus} from '@nestjs/cqrs';
import {CreateAuthorRequest} from './commands/create-author/create-author.request';
import {Requires} from "@core/decorators/requires.decorator";
import {ApiBearerAuth} from "@nestjs/swagger";

@Controller('authors')
@ApiBearerAuth()
export class AuthorController {
    constructor(private cmdBus: CommandBus) {
    }

    @Post('create')
    @Requires('author:create')
    async create(@Body() payload: CreateAuthorRequest) {
        return await this.cmdBus.execute(payload.toCommand());
    }
}
