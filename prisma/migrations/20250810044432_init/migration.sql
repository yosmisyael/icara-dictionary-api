-- CreateTable
CREATE TABLE `entries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `sign_lang` ENUM('BISINDO', 'SIBI') NOT NULL,
    `source` VARCHAR(191) NULL,
    `type` ENUM('LETTER', 'NUMBER', 'WORD') NOT NULL,

    UNIQUE INDEX `entries_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aliases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `entry_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aliases` ADD CONSTRAINT `aliases_entry_id_fkey` FOREIGN KEY (`entry_id`) REFERENCES `entries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
