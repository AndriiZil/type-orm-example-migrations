import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCityColumnToCompany1587377709466 implements MigrationInterface {
    name = 'AddCityColumnToCompany1587377709466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `company` ADD `city` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `company` DROP COLUMN `city`", undefined);
    }

}
