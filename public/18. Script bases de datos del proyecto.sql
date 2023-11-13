-- Creación de la base de datos si no existe
CREATE DATABASE IF NOT EXISTS Callbuc_Dial;

-- Selección de la base de datos
USE Callbuc_Dial;

-- Creación de la tabla Usuario
CREATE TABLE IF NOT EXISTS Usuario (
  Extension INT PRIMARY KEY,
  Clave VARCHAR(50),
  Campaña VARCHAR(50)
);

-- Creación de la tabla Cliente
CREATE TABLE IF NOT EXISTS Cliente (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Nombre VARCHAR(100),
  Telefono VARCHAR(20),
  ValorMensual DECIMAL(10, 2),
  Bancarrota VARCHAR(10),
  Edad INT,
  DeclaraTaxes VARCHAR(10),
  Extension INT,
  FOREIGN KEY (Extension) REFERENCES Usuario(Extension)
);

-- Creación de la tabla OpcionCalificacion
CREATE TABLE IF NOT EXISTS OpcionCalificacion (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Descripcion VARCHAR(100)
);

-- Insertar datos en la tabla OpcionCalificacion
INSERT IGNORE INTO OpcionCalificacion (Descripcion) VALUES
('Propietario de casa'),
('Ingles'),
('Fuera de cobertura'),
('Cita caída'),
('Cita hecha'),
('No llamar más'),
('Mayor de 70 años'),
('Buzón'),
('Llamar luego'),
('No interesado'),
('Ya tiene paneles');

-- Creación de la tabla FormaEnvio
CREATE TABLE IF NOT EXISTS FormaEnvio (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Descripcion VARCHAR(100)
);

-- Creación de la tabla Cita
CREATE TABLE IF NOT EXISTS Cita (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Cliente INT,
  OpcionCalificacion INT,
  FormaEnvio INT,
  FechaHora DATETIME,
  FOREIGN KEY (Cliente) REFERENCES Cliente(ID),
  FOREIGN KEY (OpcionCalificacion) REFERENCES OpcionCalificacion(ID),
  FOREIGN KEY (FormaEnvio) REFERENCES FormaEnvio(ID)
);

-- Agregar usuario 101
INSERT IGNORE INTO Usuario (Extension, Clave, Campaña) VALUES (101, '123456', 'Campaña1');

-- Agregar usuario 102
INSERT IGNORE INTO Usuario (Extension, Clave, Campaña) VALUES (102, '123456', 'Campaña2');

-- Agregar usuario 103
INSERT IGNORE INTO Usuario (Extension, Clave, Campaña) VALUES (103, '123456', 'Campaña3');
