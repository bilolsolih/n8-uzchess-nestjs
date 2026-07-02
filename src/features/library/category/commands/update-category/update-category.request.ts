import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { UpdateCategoryCommand } from '@/features/library/category/commands/update-category/update-category.command';

export class UpdateCategoryRequest {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  @IsOptional()
  title?: string;

  toCommand(id: number) {
    return new UpdateCategoryCommand(id, this.title);
  }
}

// Class
// Member
// Data (o'zgaruvchi) , Method (funksiya)
// Memberlar 2 xil bo'ladi: instance member, static/class member


