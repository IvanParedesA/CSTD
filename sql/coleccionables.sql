-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2023 a las 06:26:42
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coleccionables`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coleccionables`
--

CREATE TABLE `coleccionables` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `imagen` varchar(800) COLLATE utf8_spanish2_ci NOT NULL,
  `valor` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `coleccionables`
--

INSERT INTO `coleccionables` (`id`, `nombre`, `imagen`, `valor`, `created_at`) VALUES
(1, 'Cubo de Rubik', 'https://m.media-amazon.com/images/I/81XkUCfu0mL.jpg', 382, '2023-09-13 04:20:15'),
(2, 'Funko Pop', 'https://m.media-amazon.com/images/I/81CnvOG8+YL._AC_UF894,1000_QL80_.jpg', 447, '2023-09-13 04:20:15'),
(3, 'Funko Pop Sergio Perez', 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg', 899, '2023-09-13 04:23:51');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coleccionables`
--
ALTER TABLE `coleccionables`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coleccionables`
--
ALTER TABLE `coleccionables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
