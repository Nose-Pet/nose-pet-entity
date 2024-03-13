import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserSecretTable1710327156590 implements MigrationInterface {
    name = 'AddUserSecretTable1710327156590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_secret\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`encryptedPassword\` varchar(64) NOT NULL, \`salt\` varchar(32) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userIdx\` int NULL, UNIQUE INDEX \`REL_4f20f57aa2f534fa760325da2b\` (\`userIdx\`), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user_secret\` ADD CONSTRAINT \`FK_4f20f57aa2f534fa760325da2bc\` FOREIGN KEY (\`userIdx\`) REFERENCES \`user\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_secret\` DROP FOREIGN KEY \`FK_4f20f57aa2f534fa760325da2bc\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(64) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`REL_4f20f57aa2f534fa760325da2b\` ON \`user_secret\``);
        await queryRunner.query(`DROP TABLE \`user_secret\``);
    }

}
