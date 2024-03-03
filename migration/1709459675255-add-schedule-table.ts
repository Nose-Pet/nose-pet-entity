import { MigrationInterface, QueryRunner } from "typeorm";

export class AddScheduleTable1709459675255 implements MigrationInterface {
    name = 'AddScheduleTable1709459675255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`schedule_period_setting\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'EVERY_WEEK', 'EVERY_MONTH', 'EVERY_YEAR') NOT NULL, \`endDate\` datetime NOT NULL, \`scheduleIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`schedule_alarm\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`time\` datetime NOT NULL, \`status\` enum ('ACTIVATED', 'DEACTIVATED', 'DELETED') NOT NULL DEFAULT 'ACTIVATED', \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`scheduleIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`schedule_vitamin\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`amount\` int NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`scheduleIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`schedule_walk\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`totalTime\` varchar(10) NOT NULL, \`totalDistance\` int NOT NULL, \`coordinates\` json NULL, \`startDate\` datetime NOT NULL, \`endDate\` datetime NOT NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`scheduleIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`schedule\` (\`idx\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(100) NOT NULL, \`location\` varchar(500) NOT NULL, \`startDate\` datetime NOT NULL, \`endDate\` datetime NOT NULL, \`type\` enum ('SNACK', 'FOOD', 'HOSPITAL', 'KINDERGARTEN', 'GROOMING_SALON', 'WALK', 'VITAMIN', 'ETC') NOT NULL, \`status\` enum ('ACTIVATED', 'DEACTIVATED', 'DELETED') NOT NULL DEFAULT 'ACTIVATED', \`memo\` text NULL, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`creatorIdx\` int NULL, \`userPetGroupIdx\` int NULL, PRIMARY KEY (\`idx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pet_schedule\` (\`petIdx\` int NOT NULL, \`scheduleIdx\` int NOT NULL, PRIMARY KEY (\`petIdx\`, \`scheduleIdx\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`schedule_period_setting\` ADD CONSTRAINT \`FK_5c2083b4715dca75a187c4248f5\` FOREIGN KEY (\`scheduleIdx\`) REFERENCES \`schedule\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule_alarm\` ADD CONSTRAINT \`FK_c779297afc3a5de798b46c9480c\` FOREIGN KEY (\`scheduleIdx\`) REFERENCES \`schedule\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule_vitamin\` ADD CONSTRAINT \`FK_77c7ae37517c2a82daa8a410f28\` FOREIGN KEY (\`scheduleIdx\`) REFERENCES \`schedule\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule_walk\` ADD CONSTRAINT \`FK_b4285177309f37d286603be8b3f\` FOREIGN KEY (\`scheduleIdx\`) REFERENCES \`schedule\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule\` ADD CONSTRAINT \`FK_5475468edd7f2e27cd14b5430a1\` FOREIGN KEY (\`creatorIdx\`) REFERENCES \`user\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`schedule\` ADD CONSTRAINT \`FK_4330f1e62a9ad94e624a3b6559d\` FOREIGN KEY (\`userPetGroupIdx\`) REFERENCES \`user_pet_group\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pet_schedule\` ADD CONSTRAINT \`FK_2633112c83d875575b2c5cf6798\` FOREIGN KEY (\`petIdx\`) REFERENCES \`pet\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pet_schedule\` ADD CONSTRAINT \`FK_2e829aef3ada3b59afb27a71c87\` FOREIGN KEY (\`scheduleIdx\`) REFERENCES \`schedule\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pet_schedule\` DROP FOREIGN KEY \`FK_2e829aef3ada3b59afb27a71c87\``);
        await queryRunner.query(`ALTER TABLE \`pet_schedule\` DROP FOREIGN KEY \`FK_2633112c83d875575b2c5cf6798\``);
        await queryRunner.query(`ALTER TABLE \`schedule\` DROP FOREIGN KEY \`FK_4330f1e62a9ad94e624a3b6559d\``);
        await queryRunner.query(`ALTER TABLE \`schedule\` DROP FOREIGN KEY \`FK_5475468edd7f2e27cd14b5430a1\``);
        await queryRunner.query(`ALTER TABLE \`schedule_walk\` DROP FOREIGN KEY \`FK_b4285177309f37d286603be8b3f\``);
        await queryRunner.query(`ALTER TABLE \`schedule_vitamin\` DROP FOREIGN KEY \`FK_77c7ae37517c2a82daa8a410f28\``);
        await queryRunner.query(`ALTER TABLE \`schedule_alarm\` DROP FOREIGN KEY \`FK_c779297afc3a5de798b46c9480c\``);
        await queryRunner.query(`ALTER TABLE \`schedule_period_setting\` DROP FOREIGN KEY \`FK_5c2083b4715dca75a187c4248f5\``);
        await queryRunner.query(`DROP TABLE \`pet_schedule\``);
        await queryRunner.query(`DROP TABLE \`schedule\``);
        await queryRunner.query(`DROP TABLE \`schedule_walk\``);
        await queryRunner.query(`DROP TABLE \`schedule_vitamin\``);
        await queryRunner.query(`DROP TABLE \`schedule_alarm\``);
        await queryRunner.query(`DROP TABLE \`schedule_period_setting\``);
    }

}
