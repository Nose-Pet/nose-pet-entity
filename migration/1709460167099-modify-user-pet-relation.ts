import { MigrationInterface, QueryRunner } from 'typeorm';

export class ModifyUserPetRelation1709460167099 implements MigrationInterface {
  name = 'ModifyUserPetRelation1709460167099';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_28406bc0c9b78d31829407a4b31\``);
    await queryRunner.query(`DROP INDEX \`REL_28406bc0c9b78d31829407a4b3\` ON \`pet\``);
    await queryRunner.query(
      `ALTER TABLE \`pet\` ADD CONSTRAINT \`FK_28406bc0c9b78d31829407a4b31\` FOREIGN KEY (\`creatorIdx\`) REFERENCES \`user\`(\`idx\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
