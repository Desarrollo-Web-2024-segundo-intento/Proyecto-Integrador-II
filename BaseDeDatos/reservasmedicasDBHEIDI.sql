-- --------------------------------------------------------
-- Host:                         ispcserver1.ddns.net
-- Versión del servidor:         10.5.23-MariaDB-0+deb11u1 - Raspbian 11
-- SO del servidor:              debian-linux-gnueabihf
-- HeidiSQL Versión:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para reservasmedicasdb
CREATE DATABASE IF NOT EXISTS `reservasmedicasdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `reservasmedicasdb`;

-- Volcando estructura para tabla reservasmedicasdb.api_especialidad
CREATE TABLE IF NOT EXISTS `api_especialidad` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `especialidad` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla reservasmedicasdb.api_especialidad: ~6 rows (aproximadamente)
INSERT INTO `api_especialidad` (`id`, `especialidad`) VALUES
	(1, 'Clinica Medica'),
	(2, 'Cardiologia'),
	(3, 'Ginecologia'),
	(4, 'Dermatologia'),
	(5, 'Traumatologia'),
	(6, 'Bioquimica');

-- Volcando estructura para tabla reservasmedicasdb.api_estadoturno
CREATE TABLE IF NOT EXISTS `api_estadoturno` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `estado_turno` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla reservasmedicasdb.api_estadoturno: ~0 rows (aproximadamente)

-- Volcando estructura para tabla reservasmedicasdb.api_obra_social
CREATE TABLE IF NOT EXISTS `api_obra_social` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre_obra` varchar(100) NOT NULL,
  `descripcion_obra` varchar(100) NOT NULL,
  `contacto_obra` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla reservasmedicasdb.api_obra_social: ~4 rows (aproximadamente)
INSERT INTO `api_obra_social` (`id`, `nombre_obra`, `descripcion_obra`, `contacto_obra`) VALUES
	(1, 'Ospecor', 'Obra social petrolero Cordoba', '08004441234'),
	(2, 'Osde', 'Obra social privada', '08004447777'),
	(3, 'DASPU', 'DIRECCION DE ENSEÑANZAS', '080052526531'),
	(4, 'Particular', 'Sin obra social Particular', 'Sin contacto');

-- Volcando estructura para tabla reservasmedicasdb.api_paciente
CREATE TABLE IF NOT EXISTS `api_paciente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `dni` int(10) unsigned NOT NULL CHECK (`dni` >= 0),
  `fecha_nacimiento` date NOT NULL,
  `obra_social_id` bigint(20) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_paciente_obra_social_id_id_1e2d3c92` (`obra_social_id`),
  CONSTRAINT `FK_api_paciente_api_obra_social` FOREIGN KEY (`id`) REFERENCES `api_obra_social` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `api_paciente_obra_social_id_00d12c0a_fk_api_obra_social_id` FOREIGN KEY (`obra_social_id`) REFERENCES `api_obra_social` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla reservasmedicasdb.api_paciente: ~3 rows (aproximadamente)
INSERT INTO `api_paciente` (`id`, `nombre`, `apellido`, `dni`, `fecha_nacimiento`, `obra_social_id`, `correo`, `telefono`) VALUES
	(1, 'Mario', 'Gonzalez', 21394947, '1970-05-12', 2, 'mario@gmailk.com', '3516805703'),
	(2, 'Marito', 'Gonza', 22385479, '2024-05-04', 3, 'am,sndjklhs@gmail.com', '3518562341'),
	(3, 'Monica', 'Ant', 22222222, '2024-04-29', 3, 'lkoerlkoero@kjfejk.com', '3516060858');

-- Volcando estructura para tabla reservasmedicasdb.api_profesional
CREATE TABLE IF NOT EXISTS `api_profesional` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `especialidad_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_profesional_especialidad_id_id_d71baf16` (`especialidad_id`),
  CONSTRAINT `api_profesional_especialidad_id_74529eb2_fk_api_especialidad_id` FOREIGN KEY (`especialidad_id`) REFERENCES `api_especialidad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla reservasmedicasdb.api_profesional: ~1 rows (aproximadamente)
INSERT INTO `api_profesional` (`id`, `nombre`, `apellido`, `especialidad_id`) VALUES
	(1, 'Carlos', 'Pepe', 4);

-- Volcando estructura para tabla reservasmedicasdb.api_turnos
CREATE TABLE IF NOT EXISTS `api_turnos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fecha_turno` date DEFAULT NULL,
  `hora_turno` time(6) DEFAULT NULL,
  `estado_turno_id` bigint(20) DEFAULT NULL,
  `paciente_id` bigint(20) DEFAULT NULL,
  `profesional_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_turnos_estado_turno_id_67f07c38_fk_api_estadoturno_id` (`estado_turno_id`),
  KEY `api_turnos_profesional_id_ee58ae08_fk_api_profesional_id` (`profesional_id`),
  KEY `api_turnos_paciente_id_a2382413_fk_api_paciente_id` (`paciente_id`),
  CONSTRAINT `api_turnos_estado_turno_id_67f07c38_fk_api_estadoturno_id` FOREIGN KEY (`estado_turno_id`) REFERENCES `api_estadoturno` (`id`),
  CONSTRAINT `api_turnos_paciente_id_a2382413_fk_api_paciente_id` FOREIGN KEY (`paciente_id`) REFERENCES `api_paciente` (`id`),
  CONSTRAINT `api_turnos_profesional_id_ee58ae08_fk_api_profesional_id` FOREIGN KEY (`profesional_id`) REFERENCES `api_profesional` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla reservasmedicasdb.api_turnos: ~3 rows (aproximadamente)
INSERT INTO `api_turnos` (`id`, `fecha_turno`, `hora_turno`, `estado_turno_id`, `paciente_id`, `profesional_id`) VALUES
	(1, '2024-05-24', '14:00:00.000000', NULL, 2, 1),
	(2, '2024-05-24', '14:00:00.000000', NULL, 2, 1),
	(3, '2024-05-22', '04:11:00.000000', NULL, 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
