import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {RegisterCommand} from "./register.command";
import {User} from "@/features/auth/entities/user.entity";
import {AlreadyExistsException} from "@core/exceptions/already-exists.exception";
import argon2 from 'argon2';

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
    async execute({payload}: RegisterCommand) {
        const alreadyExists = await User.existsBy({username: payload.username});
        AlreadyExistsException.ThrowIf(alreadyExists);

        const newUser = User.create(payload);
        newUser.password = await argon2.hash(newUser.password);

        return await User.save(newUser);
    }
}