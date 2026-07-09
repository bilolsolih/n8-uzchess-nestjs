import {Allow, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {RegisterCommand} from "./register.command";


export class RegisterRequest {
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    username: string;

    @IsString()
    @MaxLength(32)
    @ApiProperty()
    password: string;

    @IsString()
    @MaxLength(64)
    @ApiProperty()
    fullName: string;

    @Allow()
    toCommand = () => new RegisterCommand(this);

}