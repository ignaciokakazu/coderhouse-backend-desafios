/* CREO LA DB */
CREATE DATABASE prueba CHARACTER SET utf8mb4;

/* CREO LA TABLA */
CREATE TABLE prueba.items (
	id int NOT NULL primary key AUTO_INCREMENT,
	nombre varchar(128) NOT NULL,
    categoria varchar(50) NOT NULL,
    stock int NOT NULL CHECK (stock >= 0)    
);

/* INSERTO LOS DATOS */
INSERT INTO prueba.items (nombre, categoria, stock) VALUES ('Fideos', 'Harina', 20), ('Leche', 'Lácteos', 30), ('Crema', 'Lácteos', 15);

/* BORRO EL ID = 1 */
DELETE FROM prueba.items WHERE id=1;

/*MODIFICO LOS DATOS*/
UPDATE prueba.items SET stock=45 WHERE id=2;

SELECT * FROM prueba.items;

/*Caso de que se quiera volver a probar*/
#DROP DATABASE prueba;
#DROP TABLE prueba.items;
