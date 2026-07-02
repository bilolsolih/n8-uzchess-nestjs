import { CreateCategoryCommand } from '@/features/library/category/commands/create-category/create-category.command';
import { Category } from '@/features/library/entities/category.entity';
import { ILike } from 'typeorm';
import { ConflictException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler implements ICommandHandler<CreateCategoryCommand> {
  async execute(cmd: CreateCategoryCommand) {
    const alreadyExists = await Category.existsBy({ title: ILike(cmd.title) });
    if (alreadyExists)
      throw new ConflictException('Title already exists');

    const newCategory = Category.create({ title: cmd.title });
    await Category.save(newCategory);
    return newCategory;
  }
}