//M - Model - Хранение, обработка данных. Логика
//V - View - Отображение функционала, работа с DOM, добавление слушателей на разные события
//C - Controller - Посредник, то, где мы будем запускать модель и вью

import BellsController from "./bells/bells-controller.js";
import LessonsController from "./lessons/lessons-controller.js";
import NavbarController from "./navbar/navbar-controller.js";

const navbar = new NavbarController();
const lessons = new LessonsController();
const bells = new BellsController();