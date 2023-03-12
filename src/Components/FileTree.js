import React from "react";

export default function FileTree() {
  return (
    <div class="item left">
      <ul id="browser" class="filetree">
        <li class="opened">
          <span class="folder">Глава 1. Введение в ASP.NET Core</span>
          <ul>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/1.1.php">
                  ASP.NET Core - новая эпоха в развитии ASP.NET
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/1.2.php">
                  Начало работы с ASP.NET Core
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/1.3.php">
                  Проект ASP.NET Core в Visual Studio for Mac
                </a>
              </span>
            </li>
          </ul>
        </li>
        <li class="closed">
          <span class="folder">Глава 2. Основы ASP.NET Core</span>
          <ul>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.13.php">
                  Запуск приложения. Класс Program
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.1.php">Класс Startup</a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.2.php">
                  Конвейер обработки запроса и middleware
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.3.php">
                  Методы Use, Run и делегат RequestDelegate
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.22.php">
                  Методы Map и MapWhen
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.4.php">
                  Создание компонентов middleware
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.18.php">
                  Конвейер обработки запроса
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.21.php">
                  IWebHostEnvironment и окружение
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.5.php">
                  Статические файлы
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/2.14.php">
                  Работа со статическими файлами
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/17.1.php">
                  Обработка ошибок
                </a>
              </span>
            </li>
            <li>
              <span class="file">
                <a href="//metanit.com/sharp/aspnet5/18.6.php">
                  Работа с HTTPS
                </a>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
