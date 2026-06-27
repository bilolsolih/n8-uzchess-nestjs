import { Module } from '@nestjs/common';
import { LibraryModule } from './features/library/library.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '@core/configs/typeorm.config';
import { CommonModule } from '@/features/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    LibraryModule,
    CommonModule,
  ],
})
export class AppModule {
}
