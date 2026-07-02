import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { LanguageCreateDto } from '@/features/common/dtos/language/language.create.dto';
import { Language } from '@/features/common/entities/language.entity';
import { ILike, Not } from 'typeorm';
import { LanguageUpdateDto } from '@/features/common/dtos/language/language.update.dto';
import { plainToInstance } from 'class-transformer';
import { LanguageListDto } from '@/features/common/dtos/language/language.list.dto';
import { ApiConsumes, ApiOkResponse, ApiOperation } from '@nestjs/swagger';


@Controller('languages')
export class LanguageController {
  @Get('list')
  @ApiOkResponse({ type: [LanguageListDto] })
  async getAll() {
    const languages = await Language.find();
    return plainToInstance(LanguageListDto, languages, { excludeExtraneousValues: true });
  }

  @Post('create')
  @ApiOperation({
    summary: 'Bu yerda summary yoziladi',
    description: 'Bu yerda esa uzunroq qilib description yoziladi',
  })
  async create(@Body() payload: LanguageCreateDto) {
    const titleExists = await Language.existsBy({ title: ILike(payload.title) });
    if (titleExists)
      throw new ConflictException('Title already exists');

    const codeExists = await Language.existsBy({ code: ILike(payload.code) });
    if (codeExists)
      throw new ConflictException('Code already exists');

    // 1 - usul
    // const newLanguage = { title: payload.title, code: payload.code } as Language;

    // 2 - usul
    // const newLanguage = new Language();
    // newLanguage.title = payload.title;
    // newLanguage.code = payload.code;

    // 3 - usul
    const newLanguage = Language.create({ title: payload.title, code: payload.code });

    await Language.save(newLanguage);
    return newLanguage;
  }

  @Patch('update/:id')
  @ApiConsumes('multipart/form-data')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: LanguageUpdateDto) {
    const language = await Language.findOneBy({ id });
    if (!language)
      throw new NotFoundException('Language with given id not found.');

    // Object.assign(
    //   language,
    //   Object.fromEntries(Object.entries(payload).filter(([key, value]) => value != null)));

    if (payload.title)
      language.title = payload.title;

    if (payload.code)
      language.code = payload.code;

    const titleExists = await Language.existsBy({
      id: Not(language.id),
      title: ILike(language.title),
    });
    if (titleExists)
      throw new ConflictException('Title already exists');

    const codeExists = await Language.existsBy({
      id: Not(language.id),
      code: ILike(language.code),
    });
    if (codeExists)
      throw new ConflictException('Code already exists');

    await Language.save(language);
    return language;
  }
}
