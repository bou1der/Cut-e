-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 26 2024 г., 13:57
-- Версия сервера: 8.0.24
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cute`
--

-- --------------------------------------------------------

--
-- Структура таблицы `activity`
--

CREATE TABLE `activity` (
  `id` int NOT NULL,
  `SocketId` varchar(22) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` text COLLATE utf8mb4_general_ci NOT NULL,
  `updatedAt` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `activity`
--

INSERT INTO `activity` (`id`, `SocketId`, `isActive`, `createdAt`, `updatedAt`) VALUES
(15, NULL, 0, '', 0),
(16, NULL, 0, '', 0),
(17, NULL, 0, '', 0),
(18, NULL, 0, '', 0),
(19, NULL, 0, '', 0),
(20, NULL, 0, '', 0),
(21, NULL, 0, '', 0),
(22, NULL, 0, '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `chats`
--

CREATE TABLE `chats` (
  `chatid` int NOT NULL,
  `name` text COLLATE utf8mb4_general_ci,
  `users` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `isGroup` tinyint(1) NOT NULL,
  `createdAt` text COLLATE utf8mb4_general_ci,
  `updatedAt` text COLLATE utf8mb4_general_ci
) ;

--
-- Дамп данных таблицы `chats`
--

INSERT INTO `chats` (`chatid`, `name`, `users`, `isGroup`, `createdAt`, `updatedAt`) VALUES
(2, 'ThisPartySucks', '{\"usersId\":\"[1,2,3,4,5,17]\"}', 1, NULL, NULL),
(3, NULL, '{\"usersId\":\"[2,17]\"}', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int NOT NULL,
  `chatId` int NOT NULL,
  `text` text COLLATE utf8mb4_general_ci,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `from` int NOT NULL,
  `createdAt` text COLLATE utf8mb4_general_ci NOT NULL,
  `updatedAt` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `tokens`
--

CREATE TABLE `tokens` (
  `id` int NOT NULL,
  `refresh` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `updatedAt` varchar(256) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tokens`
--

INSERT INTO `tokens` (`id`, `refresh`, `createdAt`, `updatedAt`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJ1bmRlZmluZWQiLCJpYXQiOjE3MDc4MjE5OTEsImV4cCI6MTcwODY4NTk5MX0.7W9W10igCGRMCMbReUjP9u6brgcXdwOXwaTHGzQQj1s', '2024-02-13 10:59:51', '2024-02-13 10:59:51'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW4iOiIxMiIsImlhdCI6MTcxMzYxMjg4NiwiZXhwIjoxNzE0NDc2ODg2fQ.D675h2ZkmsPMcl5P4lnBbj31cn74ZEOFeZ-umAf4IPM', '2024-02-13 11:05:37', '2024-04-20 11:34:46'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibG9naW4iOiIxMjMiLCJpYXQiOjE3MDc4MjIzOTYsImV4cCI6MTcwODY4NjM5Nn0.nsTAalMhUme_zG6cGngrE4K4IdDz-hK4H4hHnNMu-Kc', '2024-02-13 11:06:36', '2024-02-13 11:06:36'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibG9naW4iOiJib3VsZGVyIiwiaWF0IjoxNzA4NDYxMDY2LCJleHAiOjE3MDkzMjUwNjZ9.pCAbbpeZA3NldxAV8bZ2F1RJnz_zfob0xApVb0cSve4', '2024-02-15 19:33:57', '2024-02-20 20:31:06'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibG9naW4iOiIxMjM0IiwiaWF0IjoxNzA4MTkzMzYxLCJleHAiOjE3MDkwNTczNjF9.DBzDJnZftnYjwB66wlB2GKhAmkoM8vWVvMUUEnKIJuo', '2024-02-17 18:09:21', '2024-02-17 18:09:21'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibG9naW4iOiIxMjM0NSIsImlhdCI6MTcwODE5MzQyMiwiZXhwIjoxNzA5MDU3NDIyfQ.1Gg6XPR7U9eayBvrxyLRvB-s0bG28v1k-WXLFmgVtmc', '2024-02-17 18:10:22', '2024-02-17 18:10:22'),
(7, '', '2024-02-17 18:11:59', '2024-02-17 18:14:02'),
(8, '', '2024-02-17 18:14:18', '2024-02-17 18:14:51'),
(9, '', '2024-02-17 18:15:03', '2024-02-17 18:15:48'),
(10, '', '2024-02-17 18:16:01', '2024-02-17 21:13:41'),
(11, '', '2024-02-21 21:02:01', '2024-02-21 21:02:04'),
(12, '', '2024-02-21 21:02:26', '2024-02-21 21:02:31'),
(13, '', '2024-02-27 18:02:54', '2024-03-02 11:59:02'),
(14, '', '2024-02-27 18:10:40', '2024-02-27 18:31:26'),
(15, '', '2024-02-27 18:31:36', '2024-02-28 19:02:21'),
(16, '', '2024-02-28 19:04:11', '2024-02-28 19:04:17'),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImxvZ2luIjoiYm91bGRlclRlc3QiLCJpYXQiOjE3MDk2NjE4OTMsImV4cCI6MTcxMDUyNTg5M30.2jvS1gELZXQ2-6y_lMMoOsVxPS61Cq3oOOWdKFUl72I', '2024-03-02 11:59:28', '2024-03-05 18:04:53'),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsIm5hbWUiOiIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTcxMzg5MzE3NywiZXhwIjoxNzE1NjIxMTc3fQ.pxfYUT1O8BmD8E0ohD0ZZCgBih2k52RKfG_3aTS7xGk', '2024-04-23 17:26:17', '2024-04-23 17:26:17'),
(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksIm5hbWUiOiIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTcxMzg5MzI1MSwiZXhwIjoxNzE1NjIxMjUxfQ.tr_a3gsQaXzoUpkwHca9z5TcxPv2YqgAx9BV1_iBYTY', '2024-04-23 17:27:31', '2024-04-23 17:27:31'),
(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTcxMzg5MzI4MiwiZXhwIjoxNzE1NjIxMjgyfQ.GGsrEQl_FnSPlsxqI7lKIZj3IyBLI2mfeVnZFR3K5nA', '2024-04-23 17:28:02', '2024-04-23 17:28:02'),
(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsIm5hbWUiOiIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTcxMzg5MzM3OSwiZXhwIjoxNzE1NjIxMzc5fQ.LPjbjFZOYbVQSuUHBHsS9wV5kfS1pan5nMVt21K7soE', '2024-04-23 17:29:39', '2024-04-23 17:29:39'),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsIm5hbWUiOiJ0ZXN0MTIxMjExMTEyMTExNSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNzE0MTI4OTM5LCJleHAiOjE3MTU4NTY5Mzl9.m6d9i-VmvyG_y4pekEybBtzf4np3XwPQ035qqeqaOOk', '2024-04-26 10:55:39', '2024-04-26 10:55:39');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `nickname` text COLLATE utf8mb4_general_ci NOT NULL,
  `login` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` text COLLATE utf8mb4_general_ci NOT NULL,
  `updatedAt` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `nickname`, `login`, `password`, `admin`, `createdAt`, `updatedAt`) VALUES
(2, '12', '12', '$2a$15$mmoXS.DteNPd8U53HeEwluxsQG6jdEXaPP8QG143MhsgTB08jkqum', 0, '2024-02-13 11:05:37', '2024-02-13 11:05:37'),
(11, 'boulder', '123', '$2a$15$JJjXesGfb9dQmM/daLl9Le/MIROK33d5ji4DXtmfqStKtixUeo6a6', 0, '2024-02-21 21:02:01', '2024-02-21 21:02:01'),
(12, 'nir4y', '1234', '$2a$15$qWIt5ueC/oN2G2FnBnarSegUlZUxvORh/5xyLa60jtPbGXlaiEB1a', 0, '2024-02-21 21:02:26', '2024-02-21 21:02:26'),
(13, '....', '1231', '$2a$15$TBLT/utbJnMR79Tg8cs7WemoOE0dnjGl5ayLW5SdC2R.izyUlL77W', 0, '2024-02-27 18:02:54', '2024-02-27 18:02:54'),
(15, 'undefined', '1212', '$2a$15$/709M41Z3fWemW.8aG0qe.d9eJpYBtvdoIr8RoPKivmo4PKMFd8Q2', 0, '2024-02-27 18:31:36', '2024-02-27 18:31:36'),
(16, 'undefined', '123123', '$2a$15$IR8NPjk6ZJNoeiyWF9/m2.vDi2lopx1lNRZIM7HNckl60CnfkH7gq', 0, '2024-02-28 19:04:11', '2024-02-28 19:04:11'),
(17, 'вот этот юзер чурка', 'boulderTest', '$2a$15$.A.pTl2D57t4t.icCyaX3u1flea2Mu0l2RJq6IpCdrtJLz1Ey5.u.', 0, '2024-03-02 11:59:28', '2024-03-02 11:59:28'),
(18, '', 'boulder1111123131', '23091987', 0, '', ''),
(19, '', 'aaaaaaaaaaaaa', '12222', 0, '', ''),
(20, '', 'aaaaaaaaaaaaa1', '12222', 0, '', ''),
(21, '', 'test1212', '23091987', 0, '', ''),
(22, 'test1212111121115', '521', '52', 0, '2024-04-26 10:55:39', '2024-04-26 10:55:39');

--
-- Триггеры `users`
--
DELIMITER $$
CREATE TRIGGER `add_activity` AFTER INSERT ON `users` FOR EACH ROW INSERT INTO activity (id,isActive)
VALUES (NEW.id,false)
$$
DELIMITER ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `activity`
--
ALTER TABLE `activity`
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`chatid`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `chats`
--
ALTER TABLE `chats`
  MODIFY `chatid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `activity`
--
ALTER TABLE `activity`
  ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;