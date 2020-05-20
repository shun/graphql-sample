import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1587222910467 implements MigrationInterface {
    name = 'Initial1587222910467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstname` varchar(20) NOT NULL, `lastname` varchar(20) NOT NULL, `mail` char(254) NOT NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX `IDX_7395ecde6cda2e7fe90253ec59` (`mail`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `facility` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(20) NOT NULL, `start_datetime` datetime NOT NULL, `end_datetime` datetime NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `bookinginfo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(20) NOT NULL, `start_datetime` datetime NOT NULL, `end_datetime` datetime NOT NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `user_id` int NULL, `facility_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD CONSTRAINT `FK_f5801effb7f2af4511447215c8a` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD CONSTRAINT `FK_671cd07f924119a445216d11f7a` FOREIGN KEY (`facility_id`) REFERENCES `facility`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP FOREIGN KEY `FK_671cd07f924119a445216d11f7a`", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP FOREIGN KEY `FK_f5801effb7f2af4511447215c8a`", undefined);
        await queryRunner.query("DROP TABLE `bookinginfo`", undefined);
        await queryRunner.query("DROP TABLE `facility`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
