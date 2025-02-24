const { QueryInterface, DataTypes } = require('sequelize');

const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      tabel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });

    await queryInterface.bulkInsert('Users', [
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
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', {});
    await queryInterface.dropTable('Users');
  },
};
