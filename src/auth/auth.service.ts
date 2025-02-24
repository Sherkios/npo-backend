import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from 'src/auth/types';
import CryptService from 'src/crypt/crypt.service';
import { User } from 'src/user/user.model';
import UserService from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private cryptService: CryptService,
  ) {}

  async signIn(
    login: string,
    tabel: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const userDB = await this.usersService.findOneByLogin(login);

    if (!userDB) {
      throw new BadRequestException();
    }
    const user: User = userDB.get({ plain: true }) as User;

    if (user.tabel !== tabel) {
      throw new UnauthorizedException();
    }

    const compare: boolean = await this.cryptService.comparePassword(
      password,
      user.password,
    );

    if (!compare) {
      throw new UnauthorizedException();
    }

    const payload: IJwtPayload = {
      id: user.id,
      login: user.login,
      tabel: user.tabel,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
