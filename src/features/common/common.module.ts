import { Module } from '@nestjs/common';
import { LanguageController } from '@/features/common/controllers/language.controller';

@Module({ controllers: [LanguageController] })
export class CommonModule {
}