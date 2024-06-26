import { MigrationInterface, QueryRunner } from 'typeorm';

export class Addimagefield1717011521038 implements MigrationInterface {
  name = 'Addimagefield1717011521038';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`Users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`lastName\` varchar(100) NOT NULL, \`avatarUrl\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`roleId\` bigint NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`Users\` DROP FOREIGN KEY \`FK_65c56db5a9988b90b0d7245e0f0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`UserQuestions\` DROP FOREIGN KEY \`FK_bf8da38619d0f360896bd9ea76c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`UserQuestions\` DROP FOREIGN KEY \`FK_06a11e25ae4ad426bf2669554d1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Inscripcions\` DROP FOREIGN KEY \`FK_fdfac1b1570accd932fa180fd42\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Inscripcions\` DROP FOREIGN KEY \`FK_af3df69f44dbad810056d51ed0a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`PlansBenefits\` DROP FOREIGN KEY \`FK_1c6a48ca7df87bbc8a4ca3dd4ed\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`PlansBenefits\` DROP FOREIGN KEY \`FK_3999d2f9a12eebf697eb930155c\``,
    );
    await queryRunner.query(`DROP TABLE \`Users\``);
    await queryRunner.query(`DROP TABLE \`Role\``);
    await queryRunner.query(`DROP TABLE \`UserQuestions\``);
    await queryRunner.query(`DROP TABLE \`Questions\``);
    await queryRunner.query(`DROP TABLE \`Inscripcions\``);
    await queryRunner.query(`DROP TABLE \`Plans\``);
    await queryRunner.query(`DROP TABLE \`PlansBenefits\``);
    await queryRunner.query(`DROP TABLE \`Benefits\``);
  }
}
