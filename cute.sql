-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 07 2024 г., 00:46
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

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
-- Структура таблицы `blobstorage`
--

CREATE TABLE `blobstorage` (
  `id` int(11) NOT NULL,
  `directory` text NOT NULL,
  `link` text NOT NULL,
  `updatedAt` date NOT NULL,
  `createdAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `blobstorage`
--

INSERT INTO `blobstorage` (`id`, `directory`, `link`, `updatedAt`, `createdAt`) VALUES
(1, '36ba8574-2724-4de5-9798-14b1d1eb8c31', 'https://storage.yandexcloud.net/test-cloud-boulder/36ba8574-2724-4de5-9798-14b1d1eb8c31', '2024-05-04', '2024-05-04'),
(2, '45e037ea-9dd9-4035-8b56-5535e9367332', 'https://storage.yandexcloud.net/test-cloud-boulder/45e037ea-9dd9-4035-8b56-5535e9367332', '2024-05-04', '2024-05-04'),
(3, '52ab9a2e-1da7-4bec-ae25-71546765547a', 'https://storage.yandexcloud.net/test-cloud-boulder/52ab9a2e-1da7-4bec-ae25-71546765547a', '2024-05-04', '2024-05-04'),
(4, 'ead6b826-0ebd-4812-9ec1-42a9c7abc076', 'https://storage.yandexcloud.net/test-cloud-boulder/ead6b826-0ebd-4812-9ec1-42a9c7abc076', '2024-05-04', '2024-05-04'),
(5, '46fbabda-b100-479f-8414-cd8cd91de369', 'https://storage.yandexcloud.net/test-cloud-boulder/46fbabda-b100-479f-8414-cd8cd91de369', '2024-05-04', '2024-05-04'),
(6, '48dc16fe-152b-48b7-978b-9d3963f10f82', 'https://storage.yandexcloud.net/test-cloud-boulder/48dc16fe-152b-48b7-978b-9d3963f10f82', '2024-05-04', '2024-05-04'),
(7, 'b5be867f-1cff-4b50-a487-4d7762470efd', 'https://storage.yandexcloud.net/test-cloud-boulder/b5be867f-1cff-4b50-a487-4d7762470efd', '2024-05-06', '2024-05-06'),
(8, '6cb5a730-3d97-40f4-a82d-b2c51ed4ccbb', 'https://storage.yandexcloud.net/test-cloud-boulder/6cb5a730-3d97-40f4-a82d-b2c51ed4ccbb', '2024-05-06', '2024-05-06');

-- --------------------------------------------------------

--
-- Структура таблицы `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `users` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `isGroup` tinyint(1) NOT NULL,
  `createdAt` text DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `chats`
--

INSERT INTO `chats` (`id`, `name`, `users`, `isGroup`, `createdAt`, `updatedAt`) VALUES
(2, 'ThisPartySucks', '{\"id\":\"[1,2,3,4,5,17]\"}', 1, NULL, NULL),
(3, NULL, '{\"id\":\"[1,2]\"}', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `follows`
--

CREATE TABLE `follows` (
  `profileID` int(11) NOT NULL,
  `UID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `chatId` int(11) NOT NULL,
  `text` text DEFAULT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `from` int(11) NOT NULL,
  `createdAt` text NOT NULL,
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `chatId`, `text`, `timeStamp`, `from`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'AAAAAAAAAAA', '2024-05-02 18:02:43', 1, '2024-05-02 18:02:43', '2024-05-02 18:02:43'),
(2, 3, 'AAAAAAAAAAAAAA', '2024-05-02 18:02:44', 1, '2024-05-02 18:02:44', '2024-05-02 18:02:44'),
(3, 3, 'AAAAAAAAAAAAAAAAAAAAAAA', '2024-05-02 18:02:46', 1, '2024-05-02 18:02:46', '2024-05-02 18:02:46'),
(4, 3, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', '2024-05-02 18:02:50', 1, '2024-05-02 18:02:50', '2024-05-02 18:02:50'),
(5, 3, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', '2024-05-02 18:02:57', 1, '2024-05-02 18:02:57', '2024-05-02 18:02:57'),
(6, 3, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', '2024-05-02 18:03:00', 1, '2024-05-02 18:03:00', '2024-05-02 18:03:00'),
(7, 3, 'asasas', '2024-05-02 19:18:11', 1, '2024-05-02 19:18:11', '2024-05-02 19:18:11'),
(8, 3, 'TOP', '2024-05-02 19:18:15', 1, '2024-05-02 19:18:15', '2024-05-02 19:18:15'),
(9, 3, 'top', '2024-05-02 19:18:18', 1, '2024-05-02 19:18:18', '2024-05-02 19:18:18'),
(10, 3, '', '2024-05-02 19:18:24', 1, '2024-05-02 19:18:24', '2024-05-02 19:18:24'),
(11, 3, 'aaaaaaaaaa', '2024-05-03 08:29:43', 1, '2024-05-03 08:29:43', '2024-05-03 08:29:43'),
(12, 3, 'это крах ', '2024-05-03 22:16:56', 1, '2024-05-03 22:16:56', '2024-05-03 22:16:56'),
(13, 3, 'aaaaaaaaaaaaa', '2024-05-04 18:42:25', 1, '2024-05-04 18:42:25', '2024-05-04 18:42:25'),
(14, 3, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2024-05-04 18:49:11', 1, '2024-05-04 18:49:11', '2024-05-04 18:49:11'),
(15, 3, 'aaaaaaaaaaaaaaaaaaaa', '2024-05-04 18:49:12', 1, '2024-05-04 18:49:12', '2024-05-04 18:49:12'),
(16, 2, 'aaaaaaaaaaaaaaaaaa', '2024-05-06 19:27:13', 1, '2024-05-06 19:27:13', '2024-05-06 19:27:13');

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `ProfileID` int(11) NOT NULL,
  `AuthorUID` int(11) NOT NULL,
  `text` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `name` text NOT NULL,
  `avatar` int(11) DEFAULT NULL,
  `background` int(11) DEFAULT NULL,
  `isChannel` tinyint(1) NOT NULL,
  `isPrivate` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` date NOT NULL,
  `updatedAt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `profiles`
--

INSERT INTO `profiles` (`id`, `UID`, `name`, `avatar`, `background`, `isChannel`, `isPrivate`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'boulder', 6, 8, 0, 0, '0000-00-00', 2024),
(2, 2, 'test', NULL, NULL, 0, 0, '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `refresh` varchar(256) DEFAULT NULL,
  `createdAt` varchar(256) NOT NULL,
  `updatedAt` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tokens`
--

INSERT INTO `tokens` (`id`, `refresh`, `createdAt`, `updatedAt`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImJvdWxkZXIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTcxNTAzNTUwNSwiZXhwIjoxNzE2NzYzNTA1fQ.LlS_-Fl2CIPCiNjuZr6_hF7WwG0i6yexbY0iTVEbe4g', '2024-05-04 13:08:20', '2024-05-06 22:45:05'),
(2, '', '2024-05-04 13:08:28', '2024-05-04 13:08:30');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nickname` text NOT NULL,
  `login` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` text NOT NULL,
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `nickname`, `login`, `password`, `admin`, `createdAt`, `updatedAt`) VALUES
(1, 'boulder', '12', '$2b$10$Ux/W6dt/QabgABw6FagJcuWKe.D/S5RsGnMBs1lJAffV1Ezf3KEYa', 0, '2024-05-04 13:08:20', '2024-05-04 13:08:20'),
(2, 'test', '122', '$2b$10$bmpLHP5NLFyHDJacCe4w2eroOkxrE1wrdnsV4VKiPD6xwk/ps9EU6', 0, '2024-05-04 13:08:28', '2024-05-04 13:08:28');

--
-- Триггеры `users`
--
DELIMITER $$
CREATE TRIGGER `CreateProfileUID` AFTER INSERT ON `users` FOR EACH ROW INSERT INTO `profiles` (`profiles`.`UID`,`profiles`.`name`,`profiles`.`isChannel`) VALUES  (NEW.id,NEW.nickname,false)
$$
DELIMITER ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `blobstorage`
--
ALTER TABLE `blobstorage`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `profiles`
--
ALTER TABLE `profiles`
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
-- AUTO_INCREMENT для таблицы `blobstorage`
--
ALTER TABLE `blobstorage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
