-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2024 at 01:18 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-book`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin00@gmail.com', '$2y$10$FpXawBE.bsL8o49kWgIQ2.qIFjUgR6t13VHfYaiQpLGZdgaFeHXHi', '2024-01-03 12:35:18', '2024-01-03 12:35:18'),
(2, 'abeeraly239@gmail.com', '$2y$10$/jtXkUic93LnGCS6frbLLeknPDb5Ye40xzGd.HUK8fO2m3aSv7C.a', '2024-01-05 00:18:01', '2024-01-09 00:18:01');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Author` varchar(255) NOT NULL,
  `Photo` varchar(255) DEFAULT NULL,
  `Department` varchar(255) NOT NULL,
  `Price` varchar(255) NOT NULL DEFAULT '''0''',
  `Language` varchar(255) NOT NULL,
  `NumOfPages` int(11) NOT NULL,
  `NumOfDownloads` int(11) NOT NULL DEFAULT 0,
  `NumOfReads` int(11) NOT NULL DEFAULT 0,
  `File` varchar(255) DEFAULT NULL,
  `Size` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `Name`, `Author`, `Photo`, `Department`, `Price`, `Language`, `NumOfPages`, `NumOfDownloads`, `NumOfReads`, `File`, `Size`, `Description`, `created_at`, `updated_at`) VALUES
(1, 'Daggers and Destiny', 'Author1', 'imgBooks/daggers_and_destiny.jpg', 'Fantasy', '0', 'English', 400, 1000, 500, 'pdfs/daggers_and_destiny.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2024-01-04 22:15:35', '2024-01-04 22:15:35'),
(2, 'Heir to the Darkmage', 'Author2', 'imgBooks/heir_to_the_darkmage.jpg', 'Fantasy', '15.99', 'English', 350, 800, 600, 'pdfs/heir_to_the_darkmage.pdf', '4MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2024-01-04 22:15:35', '2024-01-04 22:15:35'),
(3, 'One Dark Window', 'Author3', 'imgBooks/one_dark_window.jpg', 'Fantasy', '0', 'English', 450, 1200, 700, 'pdfs/one_dark_window.pdf', '6MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-31 22:15:35', '2023-12-31 22:15:35'),
(4, 'The Amber Crown', 'Author4', 'imgBooks/the_amber_crown.jpg', 'Fantasy', '20.99', 'English', 400, 901, 552, 'pdfs/the_amber_crown.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2024-01-08 02:46:11'),
(5, 'Retrograde', 'Author5', 'imgBooks/retrograde.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/retrograde.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(6, 'The Calculating Stars', 'Author6', 'imgBooks/the_calculating_stars.jpg', 'Adventure', '0', 'English', 380, 950, 580, 'pdfs/the_calculating_stars.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(7, 'Sea Voyager', 'Author7', 'imgBooks/sea_voyager.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/sea_voyager.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(8, 'Water Elephants', 'Author8', 'imgBooks/water_elephants.jpg', 'Adventure', '0', 'English', 380, 950, 580, 'pdfs/water_elephants.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(9, 'The Secret Garden', 'Author9', 'imgBooks/the_secret_garden.jpg', 'Classic Literature', '0', 'English', 320, 850, 530, 'pdfs/the_secret_garden.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(10, 'King Arthur', 'Author10', 'imgBooks/king_arthur.jpg', 'Classic Literature', '20.99', 'English', 340, 900, 550, 'pdfs/king_arthur.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(11, 'Huckleberry Finn', 'Author11', 'imgBooks/huckleberry_finn.jpg', 'Classic Literature', '22.99', 'English', 360, 950, 580, 'pdfs/huckleberry_finn.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(12, 'To Kill a Mockingbird', 'Author12', 'imgBooks/to_kill_a_mockingbird.jpg', 'Classic Literature', '0', 'English', 400, 1000, 600, 'pdfs/to_kill_a_mockingbird.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(13, 'Category Theory for Science', 'Author13', 'imgBooks/category_theory_for_science.jpg', 'Science', '0', 'English', 280, 750, 480, 'pdfs/category_theory_for_science.pdf', '3.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(14, 'Scientists\' Laws', 'Author14', 'imgBooks/scientists_laws.jpg', 'Science', '0', 'English', 300, 800, 510, 'pdfs/scientists_laws.pdf', '4MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(15, 'Quantum Physics', 'Author15', 'imgBooks/quantum_physics.jpg', 'Science', '19.99', 'English', 320, 850, 540, 'pdfs/quantum_physics.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(16, 'Basic Mathematics', 'Author16', 'imgBooks/basic_mathematics.jpg', 'Science', '21.99', 'English', 340, 900, 570, 'pdfs/basic_mathematics.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(17, 'Diamond Eye', 'Author17', 'imgBooks/diamond_eye.jpg', 'Historical', '18.99', 'English', 300, 800, 500, 'pdfs/diamond_eye.pdf', '4MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:53:31', '2023-12-29 23:53:31'),
(18, 'Cold Millions', 'Author18', 'imgBooks/cold_millions.jpg', 'Historical', '0', 'English', 320, 850, 520, 'pdfs/cold_millions.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-31 23:53:31', '2023-12-31 23:53:31'),
(19, 'Atlantic Wars', 'Author19', 'imgBooks/atlantic_wars.jpg', 'Historical', '22.99', 'English', 340, 900, 540, 'pdfs/atlantic_wars.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:53:31', '2023-12-29 23:53:31'),
(20, 'The Buried Giant', 'Author20', 'imgBooks/the_Buried_giant.jpg', 'Historical', '0', 'English', 360, 950, 560, 'pdfs/the_Buried_giant.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:53:31', '2023-12-29 23:53:31'),
(21, 'Daggers and Destiny', 'Author21', 'imgBooks/daggers_and_destiny.jpg', 'Fantasy', '25.99', 'English', 400, 1000, 590, 'pdfs/daggers_and_destiny.pdf', '6MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(22, 'Heir to the Darkmage', 'Author22', 'imgBooks/heir_to_the_darkmage.jpg', 'Fantasy', '20.49', 'English', 410, 990, 510, 'pdfs/heir_to_the_darkmage.pdf', '5.1MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(23, 'One Dark Window', 'Author23', 'imgBooks/one_dark_window.jpg', 'Fantasy', '16.49', 'English', 360, 820, 610, 'pdfs/one_dark_window.pdf', '4.4MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(24, 'The Amber Crown', 'Author24', 'imgBooks/the_amber_crown.jpg', 'Fantasy', '22.99', 'English', 380, 950, 580, 'pdfs/the_amber_crown.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(25, 'Retrograde', 'Author25', 'imgBooks/retrograde.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/retrograde.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(26, 'The Calculating Stars', 'Author26', 'imgBooks/the_calculating_stars.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/the_calculating_stars.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(27, 'Sea Voyager', 'Author27', 'imgBooks/sea_voyager.jpg', 'Adventure', '0', 'English', 380, 950, 580, 'pdfs/sea_voyager.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(28, 'Water Elephants', 'Author28', 'imgBooks/water_elephants.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/water_elephants.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(29, 'The Secret Garden', 'Author29', 'imgBooks/the_secret_garden.jpg', 'Classic Literature', '18.99', 'English', 320, 850, 530, 'pdfs/the_secret_garden.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-31 23:18:40', '2023-12-31 23:18:40'),
(30, 'King Arthur', 'Author30', 'imgBooks/king_arthur.jpg', 'Classic Literature', '0', 'English', 340, 900, 550, 'pdfs/king_arthur.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(31, 'Huckleberry Finn', 'Author31', 'imgBooks/huckleberry_finn.jpg', 'Classic Literature', '0', 'English', 360, 950, 580, 'pdfs/huckleberry_finn.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(32, 'To Kill a Mockingbird', 'Author32', 'imgBooks/to_kill_a_mockingbird.jpg', 'Classic Literature', '24.99', 'English', 400, 1000, 600, 'pdfs/to_kill_a_mockingbird.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(33, 'Category Theory for Science', 'Author33', 'imgBooks/category_theory_for_science.jpg', 'Science', '18.99', 'English', 300, 800, 500, 'pdfs/category_theory_for_science.pdf', '4MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(34, 'Scientists\' Laws', 'Author34', 'imgBooks/scientists_laws.jpg', 'Science', '20.99', 'English', 320, 850, 520, 'pdfs/scientists_laws.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(35, 'Quantum Physics', 'Author35', 'imgBooks/quantum_physics.jpg', 'Science', '0', 'English', 340, 900, 540, 'pdfs/quantum_physics.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(36, 'Basic Mathematics', 'Author36', 'imgBooks/basic_mathematics.jpg', 'Science', '0', 'English', 360, 950, 560, 'pdfs/basic_mathematics.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:27:22', '2023-12-29 23:27:22'),
(37, 'Diamond Eye', 'Author37', 'imgBooks/diamond_eye.jpg', 'Historical', '25.50', 'English', 310, 850, 520, 'pdfs/diamond_eye.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:53:31', '2023-12-29 23:53:31'),
(38, 'Cold Millions', 'Author38', 'imgBooks/cold_millions.jpg', 'Historical', '22.99', 'English', 330, 900, 540, 'pdfs/cold_millions.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:53:31', '2023-12-29 23:53:31'),
(39, 'Atlantic Wars', 'Author39', 'imgBooks/atlantic_wars.jpg', 'Historical', '0', 'English', 350, 950, 560, 'pdfs/atlantic_wars.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:53:31', '2023-12-29 23:53:31'),
(40, 'The Buried Giant', 'Author40', 'imgBooks/the_Buried_giant.jpg', 'Historical', '25.99', 'English', 370, 1000, 580, 'pdfs/the_Buried_giant.pdf', '6MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:53:31', '2023-12-29 23:53:31'),
(41, 'Daggers and Destiny', 'Author41', 'imgBooks/daggers_and_destiny.jpg', 'Fantasy', '21.99', 'English', 420, 1050, 520, 'pdfs/daggers_and_destiny.pdf', '5.3MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(42, 'Heir to the Darkmage', 'Author42', 'imgBooks/heir_to_the_darkmage.jpg', 'Fantasy', '0', 'English', 370, 850, 620, 'pdfs/heir_to_the_darkmage.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(43, 'One Dark Window', 'Author43', 'imgBooks/one_dark_window.jpg', 'Fantasy', '29.99', 'English', 480, 1300, 750, 'pdfs/one_dark_window.pdf', '7MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(44, 'The Amber Crown', 'Author44', 'imgBooks/the_amber_crown.jpg', 'Fantasy', '0', 'English', 420, 950, 570, 'pdfs/the_amber_crown.pdf', '5.7MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 22:15:35', '2023-12-29 22:15:35'),
(45, 'Retrograde', 'Author45', 'imgBooks/retrograde.jpg', 'Adventure', '0', 'English', 380, 950, 580, 'pdfs/retrograde.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(46, 'The Calculating Stars', 'Author46', 'imgBooks/the_calculating_stars.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/the_calculating_stars.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(47, 'Sea Voyager', 'Author47', 'imgBooks/sea_voyager.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/sea_voyager.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(48, 'Water Elephants', 'Author48', 'imgBooks/water_elephants.jpg', 'Adventure', '22.99', 'English', 380, 950, 580, 'pdfs/water_elephants.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:09:14', '2023-12-29 23:09:14'),
(49, 'The Secret Garden', 'Author49', 'imgBooks/the_secret_garden.jpg', 'Classic Literature', '18.99', 'English', 320, 850, 530, 'pdfs/the_secret_garden.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(50, 'King Arthur', 'Author50', 'imgBooks/king_arthur.jpg', 'Classic Literature', '20.99', 'English', 340, 900, 550, 'pdfs/king_arthur.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(51, 'Huckleberry Finn', 'Author51', 'imgBooks/huckleberry_finn.jpg', 'Classic Literature', '22.99', 'English', 360, 950, 580, 'pdfs/huckleberry_finn.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(52, 'To Kill a Mockingbird', 'Author52', 'imgBooks/to_kill_a_mockingbird.jpg', 'Classic Literature', '24.99', 'English', 400, 1000, 600, 'pdfs/to_kill_a_mockingbird.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:18:40', '2023-12-29 23:18:40'),
(53, 'Category Theory for Science', 'Author53', 'imgBooks/category_theory_for_science.jpg', 'Science', '15.99', 'English', 280, 750, 480, 'pdfs/category_theory_for_science.pdf', '3.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:28:21', '2023-12-29 23:28:21'),
(54, 'Scientists\' Laws', 'Author54', 'imgBooks/scientists_laws.jpg', 'Science', '17.99', 'English', 300, 800, 510, 'pdfs/scientists_laws.pdf', '4MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:28:22', '2023-12-29 23:28:22'),
(55, 'Quantum Physics', 'Author55', 'imgBooks/quantum_physics.jpg', 'Science', '19.99', 'English', 320, 850, 540, 'pdfs/quantum_physics.pdf', '4.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:28:22', '2023-12-29 23:28:22'),
(56, 'Basic Mathematics', 'Author56', 'imgBooks/basic_mathematics.jpg', 'Science', '21.99', 'English', 340, 900, 570, 'pdfs/basic_mathematics.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a nunc imperdiet, vitae finibus nulla malesuada. Nullam euismod bibendum est vel finibus. Proin malesuada nisi ac augue convallis, a efficitur velit ullamcorper. In hac habitasse platea dictumst. Duis fringilla turpis at velit tristique, vitae dignissim urna tincidunt. Integer ut dapibus nisi.', '2023-12-29 23:28:22', '2023-12-29 23:28:22'),
(57, 'Diamond Eye', 'Author57', 'imgBooks/diamond_eye.jpg', 'Historical', '0', 'English', 400, 1000, 501, 'pdfs/diamond_eye.pdf', '5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 21:13:33', '2023-12-30 00:07:03'),
(58, 'Cold Millions', 'Author58', 'imgBooks/cold_millions.jpg', 'Historical', '24.99', 'English', 450, 1200, 700, 'pdfs/cold_millions.pdf', '6MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 21:13:33', '2023-12-29 21:13:33'),
(59, 'Atlantic Wars', 'Author59', 'imgBooks/atlantic_wars.jpg', 'Historical', '0', 'English', 400, 900, 550, 'pdfs/atlantic_wars.pdf', '5.5MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2023-12-29 21:13:33', '2023-12-29 21:13:33'),
(60, 'The Buried Giant', 'Author60', 'imgBooks/the_Buried_giant.jpg', 'Historical', '22.99', 'English', 380, 950, 580, 'pdfs/the_Buried_giant.pdf', '5.2MB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc ac mi bibendum, eu accumsan risus ullamcorper. Integer nec orci justo. Duis consequat libero a volutpat interdum. Curabitur ullamcorper tristique hendrerit. Sed vel elit ut urna fringilla efficitur. Vivamus at nisi eu quam feugiat vestibulum. Aliquam vel dolor nec tellus tristique suscipit in nec ligula.', '2024-01-05 21:13:33', '2024-01-05 21:13:33');

-- --------------------------------------------------------

--
-- Table structure for table `book_user`
--

CREATE TABLE `book_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `book_id` bigint(20) UNSIGNED NOT NULL,
  `price` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `book_user`
--

INSERT INTO `book_user` (`id`, `user_id`, `book_id`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 4, '20.99', '2023-12-01 04:44:02', '2023-12-01 04:44:02'),
(2, 1, 5, '22.99', '2024-01-05 04:45:35', '2024-01-05 04:45:35');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_12_13_004011_create_books_table', 1),
(7, '2023_12_20_073321_create_book_user_table', 1),
(8, '2023_12_24_162708_create_otps_table', 1),
(9, '2023_12_31_133325_add_name_column_to_books_table', 2),
(10, '2024_01_03_143319_create_admins_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `expire_at` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `code`, `email`, `expire_at`, `created_at`, `updated_at`) VALUES
(1, 668946, 'olafawzii80@gmail.com', '2023-12-30 01:43:14', '2023-12-29 23:25:34', '2023-12-29 23:43:14');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'ola fawzi', 'olafawzii80@gmail.com', '2023-12-29 21:37:29', '$2y$10$FpXawBE.bsL8o49kWgIQ2.qIFjUgR6t13VHfYaiQpLGZdgaFeHXHi', NULL, '2023-12-29 21:25:34', '2023-12-29 21:43:14'),
(2, 'ahmed omar', 'ahmed124050@gmail.com', '2024-01-05 05:23:42', '$2y$10$CLbnFfXcODHXu08uM2DOeuXUl8cUv38Epv/QuBiIW6.3Is5on8OJi', NULL, '2024-01-03 10:37:16', '2024-01-03 10:37:16'),
(3, 'Abeer Aly', 'abeeraly239@gmail.com', '2023-12-30 21:37:29', '$2y$10$FpXawBE.bsL8o49kWgIQ2.qIFjUgR6t13VHfYaiQpLGZdgaFeHXHi', NULL, '2023-12-30 21:25:34', '2023-12-30 21:43:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_user`
--
ALTER TABLE `book_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_user_user_id_foreign` (`user_id`),
  ADD KEY `book_user_book_id_foreign` (`book_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `otps_email_unique` (`email`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `book_user`
--
ALTER TABLE `book_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book_user`
--
ALTER TABLE `book_user`
  ADD CONSTRAINT `book_user_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `book_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
