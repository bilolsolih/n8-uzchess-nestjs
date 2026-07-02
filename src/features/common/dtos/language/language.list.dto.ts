import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageListDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  title: string;

  @Expose()
  @ApiProperty()
  code: string;
}