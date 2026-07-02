import { IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageUpdateDto {
  @IsString()
  @MaxLength(64)
  @IsOptional()
  @ApiProperty()
  title?: string;

  @IsString()
  @MaxLength(64)
  @IsOptional()
  @ApiProperty()
  code?: string;
}