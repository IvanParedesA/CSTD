-- Iván Ricardo Paredes Avilez A01705083
-- 19/09/2023

/* =================
*  1er Procedimiento
*  =================
*/

-- Crear procedimiento con interfaz
DELETE FROM materiales WHERE clave = uClave

-- Crear procedimiento con instrucción de SQL
CREATE PROCEDURE `eliminarMaterial`(IN `uClave` INT(6)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
DELETE FROM materiales WHERE clave = uClave; 

-- Llamar a la funcion (Ejemplo)
call eliminarMaterial (50000);

/* =================
*  2do Procedimiento
*  =================
*/

-- Crear procedimiento con interfaz
UPDATE Materiales
SET descripcion = uDescripcion
WHERE clave = uClave

-- Crear procedimiento con instrucción de SQL
CREATE PROCEDURE `modificarDescripcionMaterial`(IN `uClave` INT(6), IN `uDescripcion` VARCHAR(40)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
UPDATE Materiales SET descripcion = uDescripcion WHERE clave = uClave;

-- Llamar a la funcion (Ejemplo)
call modificarDescripcionMaterial(50000, 'Nuevo Material');

/* =================
*  3er Procedimiento
*  =================
*/

-- Crear procedimiento con interfaz
INSERT INTO Proveedores VALUES (uRFC, uRazonSocial);

-- Crear procedimiento con instrucción de SQL
CREATE PROCEDURE `agregarProveedor`(IN `uRFC` VARCHAR(15), IN `uRazonSocial` VARCHAR(40)) 
NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
INSERT INTO Proveedores VALUES (uRFC, uRazonSocial) 

-- Llamar a la funcion (Ejemplo)
call agregarProveedor('IRPA280702', 'IvanInc'); 