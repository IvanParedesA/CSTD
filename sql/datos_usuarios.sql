-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-09-2023 a las 06:51:40
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

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`) VALUES
(1, 'coleccionables_ver'),
(2, 'coleccionables_agregar');

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'administrador'),
(2, 'usuario registrado');

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`id_rol`, `id_privilegio`, `created_at`) VALUES
(1, 1, '2023-09-06 00:35:13'),
(1, 2, '2023-09-06 00:35:13'),
(2, 1, '2023-09-06 00:35:22');

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `nombre`, `created_at`) VALUES
(1, 'Ivan28', 'Hola123', 'Iván Ricardo Paredes Avilez', '2023-09-14 02:28:10'),
(9, 'Juan36', '$2a$12$CrP21PeNJcmgigILFgdUWebGGveagWddy/JezZkPtLAfliUEAyRwS', 'Juan Perez', '2023-09-14 03:17:30'),
(10, 'Ricardo43', '$2a$12$XTo.YzDCo15KKWH20Zdq3OLOkpCCHPY8jzIAQuH102vRIzI2lJjm2', 'Ricardo Paredes', '2023-09-14 04:37:13'),
(11, 'Diego32', '$2a$12$tRxLpYb29gw65h9JmbHLb.kjdStiwmZ2nzV36s64GACKpfqABYG32', 'Diego Jimenez', '2023-09-14 04:38:54');

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`id_usuario`, `id_rol`, `created_at`) VALUES
(9, 1, '2023-09-06 00:32:23'),
(11, 2, '2023-09-06 00:32:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
