import {Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors} from "@nestjs/common";
import {CreateDifficultyRequest} from "./commands/create-difficulty/create-difficulty.request";
import {FileInterceptor} from "@nestjs/platform-express";
import {multerStorageOptions} from "@core/configs/multer.config";
import {Difficulty} from "@/features/library/entities/difficulty.entity";
import {ApiConsumes} from "@nestjs/swagger";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {
    GetAllDifficultiesRequest
} from "@/features/library/difficulty/queries/get-all-difficulties/get-all-difficulties.request";

@Controller('difficulties')
export class DifficultyController {
    constructor(
        private cmdBus: CommandBus,
        private queryBus: QueryBus,
    ) {
    }

    @Post('create')
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('icon', {storage: multerStorageOptions}))
    async create(@Body() payload: CreateDifficultyRequest, @UploadedFile() icon: Express.Multer.File) {
        return await this.cmdBus.execute(payload.toCommand(icon));
    }

    @Get('list')
    async getAll(@Query() filters: GetAllDifficultiesRequest) {
        return await this.queryBus.execute(filters.toQuery());
    }
}