import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init61715102980337 implements MigrationInterface {
  name = 'Init61715102980337';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`Plans\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`price\` varchar(100) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
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
    await queryRunner.query(`DROP TABLE \`UserQuestions\``);
    await queryRunner.query(`DROP TABLE \`Questions\``);
    await queryRunner.query(`DROP TABLE \`Inscripcions\``);
    await queryRunner.query(`DROP TABLE \`Plans\``);
    await queryRunner.query(`DROP TABLE \`PlansBenefits\``);
    await queryRunner.query(`DROP TABLE \`Benefits\``);
  }
}
