import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAuthorCommand } from '@/features/library/author/commands/create-author/create-author.command';
import { Author } from '@/features/library/entities/author.entity';


@CommandHandler(CreateAuthorCommand)
export class CreateAuthorHandler implements ICommandHandler<CreateAuthorCommand> {
  async execute(cmd: CreateAuthorCommand) {
    const author = Author.create({ fullName: cmd.fullName });
    return await Author.save(author);
  }
}