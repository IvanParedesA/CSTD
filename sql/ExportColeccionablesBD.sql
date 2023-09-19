-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2023 a las 03:16:30
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
(5, 'Funko Pop Sergio Perez', '747Funko Pop Sergio Perez.jpg', 899, '2023-09-19 01:04:01'),
(6, 'Dragonoid Bakugan', '40Dragonoid.jpg', 599, '2023-09-19 01:06:27'),
(7, 'HotWheels Audi R8', '148Audi R8 HotWheels.jpg', 239, '2023-09-19 01:15:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`) VALUES
(1, 'coleccionables_ver'),
(2, 'coleccionables_agregar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'administrador'),
(2, 'usuario registrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_privilegio`
--

CREATE TABLE `rol_privilegio` (
  `id_rol` int(11) NOT NULL,
  `id_privilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`id_rol`, `id_privilegio`, `created_at`) VALUES
(1, 1, '2023-09-06 00:35:13'),
(1, 2, '2023-09-06 00:35:13'),
(2, 1, '2023-09-06 00:35:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(800) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(400) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `nombre`, `created_at`) VALUES
(1, 'Ivan28', 'Hola123', 'Iván Ricardo Paredes Avilez', '2023-09-14 02:28:10'),
(9, 'Juan36', '$2a$12$CrP21PeNJcmgigILFgdUWebGGveagWddy/JezZkPtLAfliUEAyRwS', 'Juan Perez', '2023-09-14 03:17:30'),
(10, 'Ricardo43', '$2a$12$XTo.YzDCo15KKWH20Zdq3OLOkpCCHPY8jzIAQuH102vRIzI2lJjm2', 'Ricardo Paredes', '2023-09-14 04:37:13'),
(11, 'Diego32', '$2a$12$tRxLpYb29gw65h9JmbHLb.kjdStiwmZ2nzV36s64GACKpfqABYG32', 'Diego Jimenez', '2023-09-14 04:38:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `id_usuario` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`id_usuario`, `id_rol`, `created_at`) VALUES
(9, 1, '2023-09-06 00:32:23'),
(11, 2, '2023-09-06 00:32:34');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coleccionables`
--
ALTER TABLE `coleccionables`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD PRIMARY KEY (`id_rol`,`id_privilegio`),
  ADD KEY `id_privilegio` (`id_privilegio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_unique` (`username`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`id_usuario`,`id_rol`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coleccionables`
--
ALTER TABLE `coleccionables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD CONSTRAINT `rol_privilegio_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `rol_privilegio_ibfk_2` FOREIGN KEY (`id_privilegio`) REFERENCES `privilegios` (`id`);

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
