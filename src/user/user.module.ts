import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import UserController from 'src/user/user.controller';
import { User } from 'src/user/user.model';
import UserService from 'src/user/user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
