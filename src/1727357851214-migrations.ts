import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateForeignKey1727357851214 implements MigrationInterface {
  name = "UpdateForeignKey1727357851214";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_8ba3f3c24f5b9ab648f6a2ec512\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`basketId\` varchar(36) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_d316da86bd6304cf8105ed8952\` (\`basketId\`)`
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`REL_d316da86bd6304cf8105ed8952\` ON \`user\` (\`basketId\`)`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_8ba3f3c24f5b9ab648f6a2ec512\` FOREIGN KEY (\`catalogueId\`) REFERENCES \`catalogue\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_d316da86bd6304cf8105ed89523\` FOREIGN KEY (\`basketId\`) REFERENCES \`basket\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_d316da86bd6304cf8105ed89523\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_8ba3f3c24f5b9ab648f6a2ec512\``
    );
    await queryRunner.query(
      `DROP INDEX \`REL_d316da86bd6304cf8105ed8952\` ON \`user\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP INDEX \`IDX_d316da86bd6304cf8105ed8952\``
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`basketId\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_8ba3f3c24f5b9ab648f6a2ec512\` FOREIGN KEY (\`catalogueId\`) REFERENCES \`catalogue\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }
}
