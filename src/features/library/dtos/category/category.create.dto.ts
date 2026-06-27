import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryCreateDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title: string;
}
