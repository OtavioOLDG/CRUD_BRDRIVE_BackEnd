-- CreateTable
CREATE TABLE `Zookeeper` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `especialidade` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Zookeeper_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Animal` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `especie` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `habitat` VARCHAR(191) NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cuidadorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_cuidadorId_fkey` FOREIGN KEY (`cuidadorId`) REFERENCES `Zookeeper`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
