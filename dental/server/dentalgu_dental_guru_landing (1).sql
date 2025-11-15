-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 26, 2025 at 01:01 PM
-- Server version: 10.6.19-MariaDB-cll-lve
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dentalgu_dental_guru_landing`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(500) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `name`, `phone`, `email`, `message`, `create_date`) VALUES
(11, 'api test', '546752870', 'test@gmail.com', 'test', '2025-02-12 12:29:14'),
(12, 'api test ', '1243142351', 'apitest@gmil.com', 'erytrehhtre', '2025-02-12 12:46:40'),
(13, 'api test ', '3411244544', 'test@gmail.com', 'do not reply ', '2025-02-12 13:01:11'),
(14, 'Jan Jyoti Eye Hospital', '8962875069', 'jjssehjbp@gmail.com', 'just checking .', '2025-02-12 13:06:54'),
(15, 'Dental Guru', '7477253424', 'dentalguru988@gmail.com', 'checking.....', '2025-02-13 03:23:42'),
(16, 'Api test', '4567890234', 'apitest1@gmail.com', 'Api testing', '2025-02-13 06:05:14'),
(17, 'Pradeep Kumar', '7232052646', 'pradeepskr723@gmail.com', 'want to add token system at my clinic', '2025-02-13 08:32:48'),
(18, 'Api test', '4567890234', 'apitest@gmail.com', 'Testing purpose', '2025-02-15 09:51:44'),
(19, 'api test ', '7869058569', 'shubhamsonidoaguru@gmail.com', 'api test', '2025-02-22 12:11:08'),
(20, 'api test', '1211414545', 'ds19880706@gmail.com', 'api test', '2025-02-22 12:13:54');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(55) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `name`, `email`, `phone`, `city`, `create_at`) VALUES
(23, 'Api test', 'apitest@gmail.com', '4567890234', 'Jabalpur', '2025-02-13 06:08:43'),
(24, 'Api test1', 'apitest1@gmail.com', '2345678902', 'Jabalpur', '2025-02-17 07:40:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
