import {Module} from '@nestjs/common';
import {LibraryModule} from './features/library/library.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from '@core/configs/typeorm.config';
import {CommonModule} from '@/features/common/common.module';
import {CqrsModule} from '@nestjs/cqrs';
import {JwtModule} from "@nestjs/jwt";
import {AuthModule} from "@/features/auth/auth.module";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "@core/guards/auth.guard";
import {RoleGuard} from "@core/guards/role.guard";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: "ForTheLoveOfGodDontUseThisInProduction",
            signOptions: {
                expiresIn: '1h'
            }
        }),
        TypeOrmModule.forRoot(typeOrmConfig),
        CqrsModule.forRoot(),
        AuthModule,
        LibraryModule,
        CommonModule,
    ],
    providers: [
        {provide: APP_GUARD, useClass: AuthGuard},
        {provide: APP_GUARD, useClass: RoleGuard},
    ]
})
export class AppModule {
}
