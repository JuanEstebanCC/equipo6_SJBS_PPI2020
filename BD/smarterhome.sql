-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: brcrrbthozhfttu1xppw-mysql.services.clever-cloud.com:3306
-- Generation Time: Oct 28, 2020 at 09:31 PM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brcrrbthozhfttu1xppw`
--
CREATE DATABASE IF NOT EXISTS `brcrrbthozhfttu1xppw` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `brcrrbthozhfttu1xppw`;

-- --------------------------------------------------------

--
-- Table structure for table `dispositivos`
--

CREATE TABLE `dispositivos` (
  `id_dispositivo` int(5) NOT NULL,
  `estado` int(3) NOT NULL,
  `nivel_energia` int(5) NOT NULL,
  `nombre_grupo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dispositivos`
--

INSERT INTO `dispositivos` (`id_dispositivo`, `estado`, `nivel_energia`, `nombre_grupo`) VALUES
(1, 50, 100, 'Casa 1'),
(2, 25, 50, 'Sala 1');

-- --------------------------------------------------------

--
-- Table structure for table `grupos`
--

CREATE TABLE `grupos` (
  `nombre_grupo` varchar(100) NOT NULL,
  `numero_integrantes` int(5) NOT NULL,
  `color` varchar(20) NOT NULL,
  `email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tipo_usuarios`
--

CREATE TABLE `tipo_usuarios` (
  `id` int(5) NOT NULL,
  `nombre_tipo_usuario` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(150) NOT NULL,
  `contaseña` varchar(150) NOT NULL,
  `numero` int(30) NOT NULL,
  `nombre` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
