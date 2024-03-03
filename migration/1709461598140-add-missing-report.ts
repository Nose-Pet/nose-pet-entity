import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMissingReport1709461598140 implements MigrationInterface {
    name = 'AddMissingReport1709461598140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`missing_report_image\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`src\` varchar(300) NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`missingReportIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`missing_report\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('MISSING', 'FINDING') NOT NULL, \`status\` enum ('ACTIVATED', 'DONE', 'DELETED', 'PROTECTED', 'WITNESSED') NOT NULL DEFAULT 'ACTIVATED', \`title\` varchar(100) NOT NULL, \`content\` text NOT NULL, \`missingPlace\` text NOT NULL, \`missingDate\` text NOT NULL, \`memo\` text NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`writerIdx\` int NULL, \`petIdx\` int NULL, \`petTypeIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`missing_report_image\` ADD CONSTRAINT \`FK_c9d5e4ead563fb4efc12f01926d\` FOREIGN KEY (\`missingReportIdx\`) REFERENCES \`missing_report\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`missing_report\` ADD CONSTRAINT \`FK_fc6f02a77d12ff2d0cbc6acf893\` FOREIGN KEY (\`writerIdx\`) REFERENCES \`user\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`missing_report\` ADD CONSTRAINT \`FK_77cc955dff500c8e12213ce973f\` FOREIGN KEY (\`petIdx\`) REFERENCES \`pet\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`missing_report\` ADD CONSTRAINT \`FK_db1e39e8b83c1b29c2252adacab\` FOREIGN KEY (\`petTypeIdx\`) REFERENCES \`pet_type\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`missing_report\` DROP FOREIGN KEY \`FK_db1e39e8b83c1b29c2252adacab\``);
        await queryRunner.query(`ALTER TABLE \`missing_report\` DROP FOREIGN KEY \`FK_77cc955dff500c8e12213ce973f\``);
        await queryRunner.query(`ALTER TABLE \`missing_report\` DROP FOREIGN KEY \`FK_fc6f02a77d12ff2d0cbc6acf893\``);
        await queryRunner.query(`ALTER TABLE \`missing_report_image\` DROP FOREIGN KEY \`FK_c9d5e4ead563fb4efc12f01926d\``);
        await queryRunner.query(`DROP TABLE \`missing_report\``);
        await queryRunner.query(`DROP TABLE \`missing_report_image\``);
    }

}
