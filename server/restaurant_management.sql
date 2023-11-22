CREATE TABLE `stock` (
    `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `quantity` DECIMAL(10,2) NOT NULL DEFAULT 0,
    `description` VARCHAR(255) DEFAULT NULL
);

INSERT INTO `stock` (`name`, `quantity`, `description`) VALUES
('Coca Cola', 100, 'Coca Cola 1.5L'),
('Sprite', 100, 'Sprite 1.5L'),
('Fanta', 100, 'Fanta 1.5L'),
('Pepsi', 100, 'Pepsi 1.5L'),
('7up', 100, '7up 1.5L'),
('Mirinda', 100, 'Mirinda 1.5L'),
('Mountain Dew', 100, 'Mountain Dew 1.5L'),
('Diet Coke', 100, 'Diet Coke 1.5L'),
('Diet Pepsi', 100, 'Diet Pepsi 1.5L'),
('Diet 7up', 100, 'Diet 7up 1.5L'),
('Diet Mirinda', 100, 'Diet Mirinda 1.5L'),
('Diet Mountain Dew', 100, 'Diet Mountain Dew 1.5L'),
('Coca Cola', 100, 'Coca Cola 0.5L'),
('Sprite', 100, 'Sprite 0.5L'),
('Fanta', 100, 'Fanta 0.5L'),
('Pepsi', 100, 'Pepsi 0.5L');

CREATE TABLE `purchase` (
    `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `itemId` INT(11) NOT NULL,
    `itemName` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `quantity` DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (`itemId`) REFERENCES `stock`(`id`)
);

DELIMITER $$
CREATE TRIGGER `purchase_after_insert` AFTER INSERT ON `purchase` FOR EACH ROW
BEGIN
    UPDATE `stock` SET `quantity` = `quantity` + NEW.quantity WHERE `id` = NEW.itemId;
END
$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `purchase_after_update` AFTER UPDATE ON `purchase` FOR EACH ROW
BEGIN
    UPDATE `stock` SET `quantity` = `quantity` + NEW.quantity - OLD.quantity WHERE `id` = NEW.itemId;
END
$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `purchase_after_delete` AFTER DELETE ON `purchase` FOR EACH ROW
BEGIN
    UPDATE `stock` SET `quantity` = `quantity` - OLD.quantity WHERE `id` = OLD.itemId;
END
$$
DELIMITER ;


    
