import { MigrationInterface, QueryRunner } from "typeorm";

export class Uzchess1783568977382 implements MigrationInterface {
    name = 'Uzchess1783568977382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courseCategories" ALTER COLUMN title TYPE VARCHAR(32)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courseCategories" ALTER COLUMN title TYPE VARCHAR(64)`);
    }

}
