-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 26 2018 г., 16:40
-- Версия сервера: 5.6.37
-- Версия PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `llc`
--

-- --------------------------------------------------------

--
-- Структура таблицы `logic`
--

CREATE TABLE `logic` (
  `id` int(11) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `middle_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `login` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `password` varchar(256) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `logic`
--

INSERT INTO `logic` (`id`, `first_name`, `middle_name`, `last_name`, `login`, `email`, `phone`, `password`, `date`) VALUES
(115, 'выав', 'вапавп', 'вапап', 'ffff', 'dddf@s.ru', '3434324', '$2y$10$KwFRzOTVnDfko/rZ9./37.Kj1xO.2Qt7aGiPbmG7Bc4XXZim1Kjmu', '2018-08-25 12:59:41'),
(116, 'выав', 'вапавп', 'вапап', 'ffffa', 'dddaf@s.ru', '3434324', '$2y$10$hyclg9Umcquzmazu9tFgO.gQKISH0Vk9Yy7FTbde6P5G8g9TXSodG', '2018-08-25 13:06:46'),
(117, 'авпавп', 'вапавп', 'вапавпва', 'rrree', 'eee@sss.ru', '+7(254) 545-4354', '$2y$10$GRUzGBYMDV0SCgesKhLcFO82PCXSpqSzoDL9.2zdmOnvgLr0L8g.2', '2018-08-25 22:44:31'),
(118, 'авпавп', 'вапавп', 'вапавпва', 'rrreesss', 'eesse@sss.ru', '+7(254) 545-4354', '$2y$10$7tNVMONKOV/qiYn793.NcOvwdYK7yIy46Pi5aA60ZzgzoF45v5vA6', '2018-08-25 22:46:10'),
(119, 'ваыавыа', 'вапав', 'выавы', 'evgen', 'evgen@mail.ru', '+7(454) 354-3543', '$2y$10$5X7Sjem5rnXRCOCnYvkpMesKCvlGouFMJfqwg/LxxzZ1Rn20VM1w2', '2018-08-26 11:34:17'),
(120, 'ваыавыа', 'вапав', 'выавы', 'evgens', 'evgens@mail.ru', '+7(454) 354-3543', '$2y$10$c0iInS0ajNbozrYEFxxXKOvfEq6m6AitUBGWfvCzsOHL/LFt9/fcO', '2018-08-26 11:40:42'),
(121, 'аав', 'выавы', 'выавы', 'a', 'a@a.ru', '+7(444) 444-4444', '$2y$10$Nl9erIPCaI5fTxooKm.fNui/fJFfyoEEq969PohGgDnXv5PJSzhn2', '2018-08-26 13:39:17');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `logic`
--
ALTER TABLE `logic`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `logic`
--
ALTER TABLE `logic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
