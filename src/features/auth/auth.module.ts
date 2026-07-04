import {Module} from "@nestjs/common";
import {RegisterHandler} from "./user/register/register.handler";
import {LoginHandler} from "./user/login/login.handler";
import {UserController} from "@/features/auth/user/user.controller";

@Module({
    controllers: [UserController],
    providers: [
        RegisterHandler,
        LoginHandler
    ]
})
export class AuthModule {
}