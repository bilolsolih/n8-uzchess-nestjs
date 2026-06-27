import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { CategoryCreateDto } from '../dtos/category/category.create.dto';
import { Category } from '../entities/category.entity';
import { ILike } from 'typeorm';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
@ApiBearerAuth()
export class CategoryController {
  @Post('category/create')
  async create(@Body() payload: CategoryCreateDto) {
    const alreadyExists = await Category.existsBy({ title: ILike(payload.title) });
    if (alreadyExists)
      throw new ConflictException();

    const newCategory = { title: payload.title } as Category;
    await Category.save(newCategory);
    return payload;
  }
}