import {Allow, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {LoginCommand} from "@/features/auth/user/login/login.command";

export class LoginRequest {
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    login: string;

    @IsString()
    @MaxLength(32)
    @ApiProperty()
    password: string;

    @Allow()
    toCommand = () => new LoginCommand(this);
}