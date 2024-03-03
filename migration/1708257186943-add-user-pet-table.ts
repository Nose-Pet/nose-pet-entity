import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserPetTable1708257186943 implements MigrationInterface {
    name = 'AddUserPetTable1708257186943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pet_type\` (\`idx\` int NOT NULL, \`name\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_d1e599062463a0a089527a3886\` (\`name\`), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pet_nose_print\` (\`idx\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pet\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(15) NOT NULL, \`gender\` enum ('MALE', 'FEMALE') NOT NULL, \`isNeutered\` tinyint NOT NULL DEFAULT 0, \`birth\` date NOT NULL, \`image\` varchar(300) NULL, \`status\` enum ('ACTIVATED', 'DEACTIVATED', 'DELETED') NOT NULL DEFAULT 'ACTIVATED', \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userPetGroupIdx\` int NULL, \`creatorIdx\` int NULL, \`petTypeIdx\` int NULL, \`petNosePrintIdx\` int NULL, UNIQUE INDEX \`REL_28406bc0c9b78d31829407a4b3\` (\`creatorIdx\`), UNIQUE INDEX \`REL_71ed3773afd39a1b136485cbc8\` (\`petNosePrintIdx\`), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(50) NOT NULL, \`password\` varchar(64) NOT NULL, \`name\` varchar(10) NOT NULL, \`nickname\` varchar(20) NOT NULL, \`status\` enum ('ACTIVATED', 'DEACTIVATED', 'DELETED') NOT NULL DEFAULT 'ACTIVATED', \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userPetGroupIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_pet_group\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL, \`status\` enum ('ACTIVATED', 'DEACTIVATED', 'DELETED') NOT NULL DEFAULT 'ACTIVATED', \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pet\` ADD CONSTRAINT \`FK_758fd9ecf6211e3c7eb34293b13\` FOREIGN KEY (\`userPetGroupIdx\`) REFERENCES \`user_pet_group\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pet\` ADD CONSTRAINT \`FK_28406bc0c9b78d31829407a4b31\` FOREIGN KEY (\`creatorIdx\`) REFERENCES \`user\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pet\` ADD CONSTRAINT \`FK_c059aa45c1101828bfb8ce1eb78\` FOREIGN KEY (\`petTypeIdx\`) REFERENCES \`pet_type\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pet\` ADD CONSTRAINT \`FK_71ed3773afd39a1b136485cbc82\` FOREIGN KEY (\`petNosePrintIdx\`) REFERENCES \`pet_nose_print\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_09c3d1d3db026c6202902533baf\` FOREIGN KEY (\`userPetGroupIdx\`) REFERENCES \`user_pet_group\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_09c3d1d3db026c6202902533baf\``);
        await queryRunner.query(`ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_71ed3773afd39a1b136485cbc82\``);
        await queryRunner.query(`ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_c059aa45c1101828bfb8ce1eb78\``);
        await queryRunner.query(`ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_28406bc0c9b78d31829407a4b31\``);
        await queryRunner.query(`ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_758fd9ecf6211e3c7eb34293b13\``);
        await queryRunner.query(`DROP TABLE \`user_pet_group\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_71ed3773afd39a1b136485cbc8\` ON \`pet\``);
        await queryRunner.query(`DROP INDEX \`REL_28406bc0c9b78d31829407a4b3\` ON \`pet\``);
        await queryRunner.query(`DROP TABLE \`pet\``);
        await queryRunner.query(`DROP TABLE \`pet_nose_print\``);
        await queryRunner.query(`DROP INDEX \`IDX_d1e599062463a0a089527a3886\` ON \`pet_type\``);
        await queryRunner.query(`DROP TABLE \`pet_type\``);
    }

}
