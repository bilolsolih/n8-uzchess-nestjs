import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {LoginCommand} from "@/features/auth/user/login/login.command";
import {User} from "@/features/auth/entities/user.entity";
import argon2 from "argon2";
import {DoesNotExistException} from "@core/exceptions/does-not-exist.exception";
import {JwtService} from "@nestjs/jwt";

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
    constructor(private jwtService: JwtService) {
    }

    async execute({payload}: LoginCommand) {
        const user = await User.findOneBy({username: payload.login});
        DoesNotExistException.ThrowIfNull(user, "Username or Password is incorrect");

        const passwordsMatch = await argon2.verify(user!.password, payload.password);
        DoesNotExistException.ThrowIfNot(passwordsMatch, "Username or Password is incorrect");

        const jwtPayload = {
            id: user!.id,
            role: user!.role
        }

        const accessToken = this.jwtService.sign(jwtPayload);
        return {accessToken: accessToken};
    }
}