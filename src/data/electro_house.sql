-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: electro_house
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_843500bd-d5ac-41f8-8af6-d133c617e527` (`userId`),
  CONSTRAINT `FK_843500bd-d5ac-41f8-8af6-d133c617e527` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_98e200db-349c-46fb-bc9a-3fd2d624cece` (`productId`),
  KEY `FK_325f0cec-50e4-44a7-9b90-f66ed0fc234d` (`userId`),
  CONSTRAINT `FK_325f0cec-50e4-44a7-9b90-f66ed0fc234d` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_98e200db-349c-46fb-bc9a-3fd2d624cece` FOREIGN KEY (`productID`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `banner` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'tv y sonido','cat_tvYSonido.jpg'),(2,'Heladera y lavado','cat_HeladeraYLavado.jpg'),(3,'Climatizacion','cat_climatizacion.jpg'),(4,'Pequeños electro','cat_pequeñosElectro.jpg');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productimages`
--

DROP TABLE IF EXISTS `productimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productimages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_05f5d7e2-b164-4865-a2cc-001783728c2a` (`productId`),
  CONSTRAINT `FK_05f5d7e2-b164-4865-a2cc-001783728c2a` FOREIGN KEY (`productID`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
INSERT INTO `productimages` VALUES (1,'tv sam2.webp',1),(2,'barra samsung 4...webp',2),(3,'tv 3.webp',3),(4,'equipoa.webp',4),(5,'lavarropas whirl.webp',5),(6,'heladera n.webp',6),(7,'lavarropas whil 10.webp',7),(8,'hela chica.webp',8),(9,'rojo.webp',9),(10,'aire-hitachi.webp',10),(11,'caloventor-liliana.webp',11),(12,'aire-portatil-philco.webp',12),(13,'cafetera-nespresso.webp',13),(14,'expromidora-kenbrown.webp',14),(15,'tostadora-moulinex.webp',15),(16,'multiprocesadora-atma.webp',16),(17,'1633390577221_img_.webp',17);
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(800) DEFAULT NULL,
  `subcategoriesId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_900fc3cd-b7de-43e8-897e-73b7ec68502e` (`subcategoriesId`),
  CONSTRAINT `FK_900fc3cd-b7de-43e8-897e-73b7ec68502e` FOREIGN KEY (`subcategoriesId`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'\"Smart TV 4K UHD Samsung 50\"',80000,5,'\"Led Smart. 50 Resolucion Crystal 4K UHD. Potencia de salida de sonido 20W. HDMI x 2. USB x 1. Bluetooth. Wi Fi. Sistema operativo Tizen. Incluye control remoto (one remote). Frecuencia de barrido 60 GHz. HDR\"',1,NULL,NULL),(2,'Barra de Sonido Samsung HWT450',42539,5,'\"Sonido optimizado con Smart Sound Game Mode para una mejor experiencia Conexión Bluetooth Mejorá tu experiencia de sonido Barra de sonido Samsung T450 Sonido enriquecido Bajos potentes Con la barra de sonido de 2,1 CH y el subwoofer de 6,5 pulgadas, vas a sentir la intensidad de los graves potentes y profundos mientras te rodeás de un rango de sonido más completo\"',2,NULL,NULL),(3,'Smart TV 4K UHD Samsung 55',110999,5,'\"Led Smart. 55 Resolucion Crystal 4K UHD. Potencia de salida de sonido 20W. HDMI x 2. USB x 1. Bluetooth. Wi Fi. Sistema operativo Tizen. Incluye control remoto (one remote). Frecuencia de barrido 60 GHz. HDR\"',1,NULL,NULL),(4,'Equipo de audio Philco SAP500',20999,10,'\"Bluetooth - USB - Entrada para Micrófono - Sintonizador Digital - Formatos Soportados MP3 CD WMA.\"',2,NULL,NULL),(5,'Lavarropas Whirlpool 9Kg WLF91AB',73199,5,'\"Lavarropas Automatico. Capapacidad de carga: 9 Kg. 14 programas de lavado. Lavado rapido en 30 minutos. Alarma de fin de ciclo. 1200 RPM. Tambor de acero inoxidable. Sistema de lavado: Europeo. Tipo de carga: Frontal. Controles: Digitales.\"',3,NULL,NULL),(6,'Heladera no frost Samsumng RT38K5932SL digital',130000,10,'\"Twin Cooling Plus crea un entorno favorable para preservar los alimentos frescos en la heladera - Mantiene los alimentos frescos durante más tiempo - 5 formas distintas de utilizar tu heladera - Conv ierte fácilmente tu freezer en una heladera para enfriar todos tus alimentos o cambia a modo off para ahorrar energía - La tecnología Digital Inverter ajusta automáticamente la velocidad del compres or según la demanda de frío de acuerdo a 7 niveles.\"',4,NULL,NULL),(7,'Lavarropas automatico WHIRLPOOL WWI16CS 10',85499,5,'\"Lavarropas Automatico. Capapacidad de carga: 10 Kg. 10 programas de lavado. Lavado rapido. Alarma de fin de ciclo. 730 RPM. Tambor de acero inoxidable. Sistema de lavado: Impeller. Tipo de carga: Superior. Controles: Digitales. 3 Niveles de temperatura. Antiarrugas. Doble entrada de agua\"',3,NULL,NULL),(8,'Heladera Whirlpool WRA09B1 76 Lts Retro Negra',53099,10,'\"Heladera bajo mesada. Volumen neto 76. Volumen bruto 81. Sistema de enfriamiento Cycle Defrost. Control interno de temperatura (min-med-max). Compartimiento extra frio. Portalatas. Tipo de estantes plasticos. Pies regulables. Ubicacion del freezer interior.\"',4,NULL,NULL),(9,'Vitrocalefactor Axel Rojo Turbo 2000W',7299,5,'\"Vitrocalefactor. Trabaja por conveccion. Resistencia de alto rendimiento. Termostato. Potencia 2000w. Niveles de calor. Cantidad de elementos 3. Con soporte.\"',5,NULL,NULL),(10,'A/C Split Frío Hitachi 2236FC 2600W',45999,5,'\"El Aire Acondicionado Hitachi trabaja con Gas Refrigerante Ecológico R410a, lo cual te permite disfrutar de una temperatura ideal y a la vez cuidar el medio ambiente. Además, su consumo inteligente te ayudará a ahorrar energía, mientras cuidás el planeta. Anticongelamiento -Seteando el equipo en modo Calor, los sensores de la unidad detectan la temperatura ambiente y previenen la salida de aire frío\"',6,NULL,NULL),(11,'Caloventor Liliana PTC617 1500W',4914,0,'\"Caloventor oscilante. Placa ceramica de PTC. 2 Niveles de potencia 750/1500W. Termostato regulable. Forzador de aire que recircula el aire del ambiente. Luz indicadora de encendido. Corte de seguridad por caida y sobrecalentamiento. Moderno diseno. Ocupa poco espacio. Totalmente seguro. No consume oxigeno.\"',5,NULL,NULL),(12,'A/C Portátil F/C Philco PHP32H17PI 3500W',48999,5,'\"Frío o calor, Display LCD, Filtros Lavables, Timer Programable, Función Sleep, Fácil de Instalar, No requiere Drenaje: el agua se auto-evapora. Y control remoto multifunción\"',6,NULL,NULL),(13,'cafetera-nespresso essenza Mini black',19990,5,'\"Tiene una presión de 19 bares y cuenta con un contenedor que alberga hasta 6 cápsulas usadas.\"',7,NULL,NULL),(14,'Exprimidor de jugo Ken Brown',4399,0,'\"Exprimidor de citricos. Capacidad 500 ml. Motor de 25W. Jarra Removible, transparente y graduada. 1 nivel de Potencia. De muy facil limpieza y desarmado. Doble cono para distintos tamanos de fruta. Filtro plastico removible. Apoyos de goma antideslizante. Alimentacion 220V 50Hz.\"',7,NULL,NULL),(15,'tostadora-moulinex LT2608-AR',6499,0,'\"Potencia 720W. 2 Ranuras para todo tipo de pan. 7 Niveles de tostado. Funciones: stop, descongelar y recalentar. Cuerpo de metal. Paredes frias al tacto. Bandeja colectora de migas. Extra elevacion para sacar el pan mas facil. Enrollacable.\"',7,NULL,NULL),(16,'Multiprocesadora con vaso Atma LP8425P',13499,10,'\"Multiprocesadora. Velocidades 2. Boton pusador. Capacidad Bowl 1.2L. Accesorios cuchilla acero inoxidable, amasador, rebanador, rallador, procesador de verduras, exprimidor y emulsionador. Pica, ralla, rebana, tritura, amasa, exprime, graniza hielo. Cuchillas de acero\"',7,NULL,NULL),(17,'Parrilla Eléctrica Liliana AK300',10399,10,'\"La parrilla eléctrica Liliana AK300 tiene un compacto y moderno diseño que te permitirá cocinar fácilmente reduciendo el humo y el olor. Posee una superficie antiadherente y tapa de vidrio transparente para que puedas controlar la cocción de tus comidas. Además, su bandeja recolectora de grasa y aceite es extraíble para facilitar la limpieza.\"',7,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `categoriesId` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a778fa56-ac28-4417-874b-e6adb65427bf` (`categoriesId`),
  CONSTRAINT `FK_a778fa56-ac28-4417-874b-e6adb65427bf` FOREIGN KEY (`categoriesId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'tv',1,NULL,NULL),(2,'sonido',1,NULL,NULL),(3,'lavado',2,NULL,NULL),(4,'Heladera',2,NULL,NULL),(5,'calefaccion',3,NULL,NULL),(6,'aire',3,NULL,NULL),(7,'cocina',4,NULL,NULL);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `rol` int(2) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Yami','correa','yami@gmail.com','$2a$10$lNAlphjM/G/TFfwDV1X7nuzS20zwCkPfrJLTm9689vX82.5gGD0FS',NULL,1,NULL,NULL,NULL),(2,'lucho','molina','lucho@gmail.com','$2a$10$A6GAgxlA9T.lpknbH1AKQeixkNqU3sre0Hu07Mh7jyn.p1XO/QFZ2',NULL,1,NULL,NULL,NULL),(3,'vilma','toledo','vilmat@gmail.com','$2a$10$M9AqWe5R/jSMyEVkEHAN7eGZFXeVn8MjdBR/c/O7O84avL5FHxQOe',NULL,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'electro_house'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-14 16:25:44
