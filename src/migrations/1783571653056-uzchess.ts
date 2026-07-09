import { MigrationInterface, QueryRunner } from "typeorm";

export class Uzchess1783571653056 implements MigrationInterface {
    name = 'Uzchess1783571653056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "difficulties" ("id" SERIAL NOT NULL , "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying(32) NOT NULL, "icon" character varying(256) NOT NULL, CONSTRAINT "UQ_de991ed11f2258b97640f71a45a" UNIQUE ("title"), CONSTRAINT "PK_4c3dd46c9ed9b426d0307e45b3e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "difficulties"`);
    }

}
