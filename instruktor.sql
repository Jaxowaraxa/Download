-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Gru 2024, 21:23
-- Wersja serwera: 10.1.36-MariaDB
-- Wersja PHP: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `instruktor`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kursy_typy`
--

CREATE TABLE `kursy_typy` (
  `ID` int(11) NOT NULL,
  `Typ` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `kursy_typy`
--

INSERT INTO `kursy_typy` (`ID`, `Typ`) VALUES
(1, 'KPP - Certyfikacja'),
(2, 'KPP - Recertyfikacja'),
(3, 'Pierwsza Pomoc'),
(4, 'Pierwsza Pomoc Dzieciom'),
(5, 'Pierwsza Pomoc W Miejscu Pracy');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `miasta`
--

CREATE TABLE `miasta` (
  `ID` int(11) NOT NULL,
  `Miasto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `miasta`
--

INSERT INTO `miasta` (`ID`, `Miasto`) VALUES
(1, 'Białystok'),
(2, 'Bielsko-Biała'),
(3, 'Bydgoszcz'),
(4, 'Częstochowa'),
(5, 'Gdańsk'),
(6, 'Gdynia'),
(7, 'Gliwice'),
(8, 'Katowice'),
(9, 'Kielce'),
(10, 'Koszalin'),
(11, 'Kraków'),
(12, 'Łódź'),
(13, 'Lublin'),
(14, 'Olsztyn'),
(15, 'Poznań'),
(16, 'Radom'),
(17, 'Rzeszów'),
(18, 'Rybnik'),
(19, 'Szczecin'),
(20, 'Toruń'),
(21, 'Warszawa'),
(22, 'Wrocław'),
(23, 'Zabrze'),
(24, 'Zakopane');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pytania`
--

CREATE TABLE `pytania` (
  `ID` int(11) NOT NULL,
  `Email` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `Pytanie` text COLLATE utf8_polish_ci NOT NULL,
  `Data_zadania` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczestnicy`
--

CREATE TABLE `uczestnicy` (
  `ID_Uczestnik` int(11) NOT NULL,
  `Imie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nazwisko` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Numer_tel` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Data_urodzenia` date NOT NULL,
  `Miasto_ID` int(11) NOT NULL,
  `Typ_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kursy_typy`
--
ALTER TABLE `kursy_typy`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `miasta`
--
ALTER TABLE `miasta`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `pytania`
--
ALTER TABLE `pytania`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `uczestnicy`
--
ALTER TABLE `uczestnicy`
  ADD PRIMARY KEY (`ID_Uczestnik`),
  ADD KEY `Miasto_ID` (`Miasto_ID`),
  ADD KEY `Typ_ID` (`Typ_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `kursy_typy`
--
ALTER TABLE `kursy_typy`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `miasta`
--
ALTER TABLE `miasta`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT dla tabeli `pytania`
--
ALTER TABLE `pytania`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `uczestnicy`
--
ALTER TABLE `uczestnicy`
  MODIFY `ID_Uczestnik` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `uczestnicy`
--
ALTER TABLE `uczestnicy`
  ADD CONSTRAINT `uczestnicy_ibfk_1` FOREIGN KEY (`Miasto_ID`) REFERENCES `miasta` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `uczestnicy_ibfk_2` FOREIGN KEY (`Typ_ID`) REFERENCES `kursy_typy` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
