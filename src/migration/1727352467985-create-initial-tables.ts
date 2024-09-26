import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1727352467985 implements MigrationInterface {
  name = "CreateInitialTable1727352467985";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`catalogue\` (\`id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`catalogue_element\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`stock\` int NOT NULL, \`image\` varchar(255) NOT NULL, \`catalogueId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`catalogueId\` varchar(36) NULL, UNIQUE INDEX \`REL_8ba3f3c24f5b9ab648f6a2ec51\` (\`catalogueId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`basket\` (\`id\` varchar(36) NOT NULL, \`total\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`basket_item\` (\`id\` varchar(36) NOT NULL, \`productId\` varchar(255) NOT NULL, \`quantity\` int NOT NULL, \`price\` int NOT NULL, \`basketId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`catalogue_element\` ADD CONSTRAINT \`FK_583d4e113a254c147e8b1ed13f4\` FOREIGN KEY (\`catalogueId\`) REFERENCES \`catalogue\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_8ba3f3c24f5b9ab648f6a2ec512\` FOREIGN KEY (\`catalogueId\`) REFERENCES \`catalogue\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`basket_item\` ADD CONSTRAINT \`FK_905bbacd09ec186a9232699af68\` FOREIGN KEY (\`basketId\`) REFERENCES \`basket\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`basket_item\` DROP FOREIGN KEY \`FK_905bbacd09ec186a9232699af68\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_8ba3f3c24f5b9ab648f6a2ec512\``
    );
    await queryRunner.query(
      `ALTER TABLE \`catalogue_element\` DROP FOREIGN KEY \`FK_583d4e113a254c147e8b1ed13f4\``
    );
    await queryRunner.query(`DROP TABLE \`basket_item\``);
    await queryRunner.query(`DROP TABLE \`basket\``);
    await queryRunner.query(
      `DROP INDEX \`REL_8ba3f3c24f5b9ab648f6a2ec51\` ON \`user\``
    );
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`catalogue_element\``);
    await queryRunner.query(`DROP TABLE \`catalogue\``);
  }
}
