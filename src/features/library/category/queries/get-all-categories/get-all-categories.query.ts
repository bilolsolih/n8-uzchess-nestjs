export class GetAllCategoriesQuery {
    constructor(
        public search?: string,
        public page?: number,
        public size?: number,
    ) {
    }
}