import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryCommand } from '@/features/library/category/commands/create-category/create-category.command';

export class CreateCategoryRequest {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title: string;

  toCommand() {
    return new CreateCategoryCommand(this.title);
  }
}
