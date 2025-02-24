# Docker

Для запуска проекта необходим dokcer и docker-compose

## ubuntu

https://docs.docker.com/engine/install/ubuntu/

## windows

https://docs.docker.com/desktop/setup/install/windows-install/

## docker-compose

https://docs.docker.com/compose/install/

# Начало работы

## Установка

```bash

cp .env.example .env


npm install

```

## Запуск

```bash
docker-compose up --build -d

```

## Заполнение данных

```bash
npx sequelize-cli db:seed:all

```

Теперь можно отправлять запросы
