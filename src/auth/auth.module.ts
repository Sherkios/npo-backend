import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import AuthController from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { jwtSecret } from 'src/auth/constants';
import CryptService from 'src/crypt/crypt.service';
import { User } from 'src/user/user.model';
import UserModule from 'src/user/user.module';
import UserService from 'src/user/user.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtSecret,
    }),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, CryptService],
})
export default class AuthModule {}
