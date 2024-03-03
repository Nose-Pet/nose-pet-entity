import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTokenTable1709467452354 implements MigrationInterface {
    name = 'AddTokenTable1709467452354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`token\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`status\` enum ('ACTIVATED', 'DEACTIVATED', 'DEACTIVATED_BY_OTHER_SESSION', 'EXPIRED') NOT NULL DEFAULT 'ACTIVATED', \`type\` enum ('LOGIN') NOT NULL, \`content\` varchar(500) NOT NULL, \`expiredDate\` datetime NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`token\` ADD CONSTRAINT \`FK_083dfdce5e2d4d08b1f76a48781\` FOREIGN KEY (\`userIdx\`) REFERENCES \`user\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`token\` DROP FOREIGN KEY \`FK_083dfdce5e2d4d08b1f76a48781\``);
        await queryRunner.query(`DROP TABLE \`token\``);
    }

}
