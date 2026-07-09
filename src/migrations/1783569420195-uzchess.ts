import { MigrationInterface, QueryRunner } from "typeorm";

export class Uzchess1783569420195 implements MigrationInterface {
    name = 'Uzchess1783569420195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "languages" ALTER COLUMN "code" TYPE VARCHAR(6)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "languages" ALTER COLUMN "code" TYPE VARCHAR(4)`)
    }

}
