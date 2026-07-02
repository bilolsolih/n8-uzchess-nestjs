import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageCreateDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  code: string;
}