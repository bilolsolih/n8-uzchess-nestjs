import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAuthorRequest } from './commands/create-author/create-author.request';

@Controller('authors')
export class AuthorController {
  constructor(private cmdBus: CommandBus) {
  }

  @Post('create')
  async create(@Body() payload: CreateAuthorRequest) {
    return await this.cmdBus.execute(payload.toCommand());
  }
}
