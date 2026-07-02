import { UpdateCategoryRequest } from '@/features/library/category/commands/update-category/update-category.request';

export class UpdateCategoryCommand {
  constructor(
    public id: number,
    public title?: string,
  ) {
  }

  static fromRequest(id: number, request: UpdateCategoryRequest) {
    return new UpdateCategoryCommand(id, request.title);
  }
}