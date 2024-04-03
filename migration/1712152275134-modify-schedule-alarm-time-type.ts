import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyScheduleAlarmTimeType1712152275134 implements MigrationInterface {
    name = 'ModifyScheduleAlarmTimeType1712152275134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`schedule_alarm\` DROP COLUMN \`time\``);
        await queryRunner.query(`ALTER TABLE \`schedule_alarm\` ADD \`time\` time NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`schedule_alarm\` DROP COLUMN \`time\``);
        await queryRunner.query(`ALTER TABLE \`schedule_alarm\` ADD \`time\` datetime NOT NULL`);
    }

}
