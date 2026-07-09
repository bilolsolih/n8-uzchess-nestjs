import {ApiProperty} from "@nestjs/swagger";
import {Allow, IsString, MaxLength} from "class-validator";
import {CreateDifficultyCommand} from "./create-difficulty.command";

export class CreateDifficultyRequest {
    @IsString()
    @MaxLength(32)
    @ApiProperty()
    title: string;

    @Allow()
    @ApiProperty({type: "string", format: "binary"})
    icon: string;

    @Allow()
    toCommand = (icon: Express.Multer.File) => new CreateDifficultyCommand(this.title, icon);
}