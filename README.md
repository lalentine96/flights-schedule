Приложение, отображающее расписание аэропорта.<br />
Показывает прилеты и отлеты на ближайшие два часа. 

## Данные

Для приложения данные о полетах генерируются случайным образом.

### Как начать использовать реальные данные

* Зарегистрироваться на сайте [https://rapidapi.com/](https://rapidapi.com/)
* Подписаться на [AeroDataBox API](https://rapidapi.com/squawk7000/api/aerodatabox/)
* Скопировать со страницы API свой приватный ключ (Header Parameters => X-RapidAPI-Key)
* Заменить используемый сервис в [соответствующем месте кода](https://github.com/lalentine96/flights-schedule/blob/c8f396f67a1316eabefc1d5f108f24e5a521fe5c/src/components/app/app.js#L14), вместо key подставив свой приватный ключ

### Как изменить аэропорт

* Если используются реальные данные, подставить ICAO-код нужного аэропорта при [инициализации сервиса](https://github.com/lalentine96/flights-schedule/blob/c8f396f67a1316eabefc1d5f108f24e5a521fe5c/src/components/app/app.js#L14)
* Изменить [заголовок в приложении](https://github.com/lalentine96/flights-schedule/blob/c8f396f67a1316eabefc1d5f108f24e5a521fe5c/
src/components/app/app.js#L76)

## Основные команды

### `make run-dummy-backend`

Запустить сервис случайной генерации данных о полетах

### `npm start`

Запустить приложение в development режиме.<br />
Чтобы увидеть его в браузере, нужно открыть [http://localhost:3000](http://localhost:3000).

### `npm run build`

Собрать приложение для production в папке `build`.<br />

