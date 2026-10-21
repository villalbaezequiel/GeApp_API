-- Schema de GEAPP generado desde los modelos Sequelize (server/models) con sequelize.sync()
-- sobre MySQL 8.4, volcado con: mysqldump --no-data. NO es un dump de la DB real de EC2:
-- puede diferir en indices/tipos. Para comparar, volcar la real:
--   mysqldump --no-data --routines -h <host> -u <user> -p geapp_prod > real.sql
-- Fuente de verdad del schema: los modelos; las migraciones solo cubren users y friends.
--
-- Tabla auxiliar usada por db/process_lines.sql (carga del padron), no esta en los modelos:
--   CREATE TABLE my_temp (text_in VARCHAR(500));  -- definicion supuesta
--
-- Uso: mysql -u <user> -p <database> < db/schema.sql   (requiere MySQL 8: collation utf8mb4_0900_ai_ci)

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS `citizens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nationalId` varchar(255) NOT NULL,
  `first` varchar(255) NOT NULL,
  `last` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL,
  `friendsQty` int DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nationalId` (`nationalId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `configs` (
  `code` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `elections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `friends` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `citizenId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `citizenId` (`citizenId`),
  CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`citizenId`) REFERENCES `citizens` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `scpl_clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_citizen` int NOT NULL,
  `service` int NOT NULL,
  `category` int NOT NULL,
  `partner` int NOT NULL,
  `name_lastname` varchar(255) NOT NULL,
  `sum` int NOT NULL,
  `area` int NOT NULL,
  `route` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `address_number` int NOT NULL,
  `piso` int NOT NULL,
  `dpto` varchar(255) NOT NULL,
  `cp` varchar(255) NOT NULL,
  `dni` int NOT NULL,
  `cuit` varchar(255) NOT NULL,
  `electroral` varchar(255) NOT NULL,
  `electoral` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `telephone_one` varchar(255) NOT NULL,
  `telephone_two` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_signed` varchar(255) NOT NULL,
  `id_user_referrer` int NOT NULL,
  `sign_date` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `scrutinies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `scrutinypartyId` int DEFAULT NULL,
  `votingtableId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `scrutinypartyId` (`scrutinypartyId`),
  KEY `votingtableId` (`votingtableId`),
  CONSTRAINT `scrutinies_ibfk_1` FOREIGN KEY (`scrutinypartyId`) REFERENCES `scrutinyparties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `scrutinies_ibfk_2` FOREIGN KEY (`votingtableId`) REFERENCES `votingtables` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `scrutinycategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `electionId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `electionId` (`electionId`),
  CONSTRAINT `scrutinycategories_ibfk_1` FOREIGN KEY (`electionId`) REFERENCES `elections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `scrutinyparties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `scrutinycategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `scrutinycategoryId` (`scrutinycategoryId`),
  CONSTRAINT `scrutinyparties_ibfk_1` FOREIGN KEY (`scrutinycategoryId`) REFERENCES `scrutinycategories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nationalId` varchar(255) NOT NULL,
  `first` varchar(255) DEFAULT NULL,
  `last` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `helpPhone` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'USER',
  `approved` tinyint(1) NOT NULL DEFAULT '1',
  `resetpassword` tinyint(1) DEFAULT '0',
  `hash` varchar(550) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nationalId` (`nationalId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `voters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order` varchar(255) DEFAULT NULL,
  `voted` tinyint(1) NOT NULL DEFAULT '0',
  `isOwner` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `citizenId` int DEFAULT NULL,
  `votingtableId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `citizenId` (`citizenId`),
  KEY `votingtableId` (`votingtableId`),
  CONSTRAINT `voters_ibfk_1` FOREIGN KEY (`citizenId`) REFERENCES `citizens` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `voters_ibfk_2` FOREIGN KEY (`votingtableId`) REFERENCES `votingtables` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `votingtables` (
  `id` int NOT NULL AUTO_INCREMENT,
  `table` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `establishment` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `circuit` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `isOpen` tinyint(1) NOT NULL DEFAULT '1',
  `replenishQty` int NOT NULL DEFAULT '0',
  `notes` varchar(500) DEFAULT NULL,
  `scrutinyPath` varchar(500) DEFAULT NULL,
  `sumVotes` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `electionId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `electionId` (`electionId`),
  CONSTRAINT `votingtables_ibfk_1` FOREIGN KEY (`electionId`) REFERENCES `elections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
