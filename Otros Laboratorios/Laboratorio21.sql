-- Iván Ricardo Paredes Avilez A01705083
-- 19/09/2023

-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97. 

SELECT SUM(cantidad) as 'Total de unidades', SUM((Precio + impuesto)*cantidad)
FROM Materiales M, Entregan E
WHERE M.clave = E.clave
AND fecha BETWEEN '1997/01/01' AND '1997/12/31';

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

SELECT P.RazonSocial, COUNT(*) as 'Numero de Entregas', SUM((Precio + impuesto)*cantidad) as 'Importe total'
FROM Proveedores P, Entregan E, Materiales M
WHERE E.RFC = P.RFC
AND E.clave = M.clave
GROUP BY P.RazonSocial
ORDER BY COUNT(*) DESC;

/*Por cada material obtener la clave y descripción del 
material, la cantidad total entregada, la mínima cantidad 
entregada, la máxima cantidad entregada, el importe total 
de las entregas de aquellos materiales en los que la 
cantidad promedio entregada sea mayor a 400.
*/

SELECT M.clave, M.descripcion, SUM(Cantidad) 'Cantidad Entregada',
MAX(Cantidad) 'Cantidad Máxima Entregada',
MIN(Cantidad) ' Cantidad Mínima Entregada'
FROM Materiales M, Entregan E
WHERE M.clave = E.clave
GROUP BY M.clave, M.descripcion
HAVING AVG(cantidad) > 400;

/* Para cada proveedor, indicar su razón social y mostrar la 
cantidad promedio de cada material entregado, detallando la 
clave y descripción del material, excluyendo aquellos 
proveedores para los que la cantidad promedio sea menor a 500. 
*/

SELECT P.RazonSocial, M.clave, M.descripcion, 
AVG(cantidad) as 'Promedio entregado'
FROM Proveedores P, Materiales M, Entregan E
WHERE M.clave = E.clave
AND P.RFC = E.RFC
GROUP BY P.RazonSocial, M.clave, M.descripcion
HAVING AVG(cantidad) >= 500;

/* Mostrar en una solo consulta los mismos datos que en 
la consulta anterior pero para dos grupos de proveedores: 
aquellos para los que la cantidad promedio entregada es 
menor a 370 y aquellos para los que la cantidad promedio 
entregada sea mayor a 450. 
*/

SELECT P.RazonSocial, M.clave, M.descripcion, 
AVG(cantidad) as 'Promedio entregado'
FROM Proveedores P, Materiales M, Entregan E
WHERE M.clave = E.clave
AND P.RFC = E.RFC
GROUP BY P.RazonSocial, M.clave, M.descripcion
HAVING AVG(cantidad) < 370 OR AVG(cantidad) > 450;

/* Considerando que los valores de tipos CHAR y VARCHAR deben 
ir encerrados entre apóstrofes, los valores numéricos se 
escriben directamente y los de fecha, como '1-JAN-00' para 
1o. de enero del 2000, inserta cinco nuevos materiales. 
*/

INSERT INTO materiales VALUES
(10000, 'Resistol 5000', 399, 39),
(10001, 'Pintura blanca', 350, 35),
(10002, 'Clavos', 10, 1),
(10003, 'Tabla Roca', 1500, 150),
(10004, 'Ventana', 1200, 120);

-- Clave y descripción de los materiales que nunca han sido entregados. 

SELECT clave, descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT Clave FROM Entregan);

/* Razón social de los proveedores que han realizado entregas tanto 
al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'. 
*/

SELECT razonsocial
FROM proveedores p, proyectos pr, entregan e 
WHERE p.rfc = e.rfc 
AND pr.numero = e.numero 
AND denominacion = 'Vamos Mexico' 
AND razonsocial IN (SELECT razonsocial 
                    FROM proveedores p, proyectos pr, entregan e 
                    WHERE p.rfc = e.rfc 
                    AND pr.numero = e.numero 
                    AND denominacion = 'Queretaro Limpio');


--  Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

SELECT descripcion
FROM Materiales
WHERE descripcion NOT IN (SELECT descripcion
                            FROM Entregan E, Materiales M, Proyectos P
                            WHERE E.clave = M.clave
                            AND E.numero = P.numero
                            AND denominacion = 'CIT Yucatán');

/* Razón social y promedio de cantidad entregada de los proveedores cuyo 
promedio de cantidad entregada es mayor al promedio de la cantidad 
entregada por el proveedor con el RFC 'VAGO780901'. 
*/

SELECT RazonSocial, AVG(cantidad) as 'Promedio de cantidad entregada'
FROM Entregan E, Proveedores P
WHERE E.RFC = P.RFC
GROUP BY P.razonsocial
HAVING AVG(cantidad) > (SELECT AVG(cantidad) as 'Promedio de cantidad entregada'
                        FROM Entregan E, Proveedores P
                        WHERE E.RFC = P.RFC
                        AND P.razonsocial = 'Comex');

/* RFC, razón social de los proveedores que participaron en el proyecto 
'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 
fueron mayores a las cantidades totales entregadas en el 2001. 
*/

SELECT P.rfc, P.razonsocial
FROM proveedores P, Entregan E, Proyectos Pr 
WHERE P.rfc = E.rfc 
AND E.numero = Pr.numero
AND Pr.denominacion = 'Infonavit Durango'
AND E.fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY P.rfc, P.razonsocial 
HAVING SUM(E.cantidad) > (SELECT SUM(E.cantidad)
                            FROM proveedores P, Entregan E, Proyectos Pr 
                            WHERE P.rfc = E.rfc 
                            AND E.numero = Pr.numero
                            AND Pr.denominacion = 'Infonavit Durango'
                            AND E.fecha BETWEEN '2001-01-01' AND '2001-12-31');


