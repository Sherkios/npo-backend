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

Данные:

```ts
{
  login: 'test1',
  tabel: '001',
  password: bcrypt.hashSync('password', 10),
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  login: 'test2',
  tabel: '002',
  password: bcrypt.hashSync('password2', 10),
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  login: 'test3',
  tabel: '003',
  password: bcrypt.hashSync('password3', 10),
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  login: 'test4',
  tabel: '004',
  password: bcrypt.hashSync('password4', 10),
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  login: 'test5',
  tabel: '005',
  password: bcrypt.hashSync('password5', 10),
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  login: 'test6',
  tabel: '006',
  password: bcrypt.hashSync('password6', 10),
  createdAt: new Date(),
  updatedAt: new Date(),
},
```
