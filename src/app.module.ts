import { Module } from '@nestjs/common';
import { LibraryModule } from './features/library/library.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '@core/configs/typeorm.config';
import { CommonModule } from '@/features/common/common.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CqrsModule.forRoot(),
    LibraryModule,
    CommonModule,
  ],
})
export class AppModule {
}
