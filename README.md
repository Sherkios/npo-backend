# Docker

Для запуска проекта необходим dokcer и docker-compose

## ubuntu

https://docs.docker.com/engine/install/ubuntu/

## windows

https://docs.docker.com/desktop/setup/install/windows-install/

# Установка

```bash
cp .env.example .env

docker-compose up --build -d
```

## Заполнение данных

npx sequelize-cli db:seed:all
