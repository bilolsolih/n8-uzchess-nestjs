import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {CreateDifficultyCommand} from "./create-difficulty.command";
import {Difficulty} from "@/features/library/entities/difficulty.entity";
import {ILike} from "typeorm";
import {AlreadyExistsException} from "@core/exceptions/already-exists.exception";


@CommandHandler(CreateDifficultyCommand)
export class CreateDifficultyHandler implements ICommandHandler<CreateDifficultyCommand> {
    async execute({title, icon}: CreateDifficultyCommand) {
        const alreadyExists = await Difficulty.existsBy({title: ILike(title)});
        AlreadyExistsException.ThrowIf(alreadyExists);

        const newDifficulty = {title: title, icon: icon.path} as Difficulty;
        return await Difficulty.save(newDifficulty);
    }
}