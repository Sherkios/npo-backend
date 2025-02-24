import { BeforeCreate, Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ unique: true })
  login: string;

  @Column({ unique: true, allowNull: false })
  tabel: string;

  @Column
  password: string;

  @BeforeCreate
  static formatTabel(user: User) {
    // Форматируем tabel, чтобы он всегда имел 3 цифры с ведущими нулями
    user.tabel = user.tabel.padStart(3);
  }
}
