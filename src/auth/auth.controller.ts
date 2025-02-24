import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { AuthUserDto } from 'src/auth/dto/authUserDto';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async signIn(@Body() authUserDto: AuthUserDto) {
    return this.authService.signIn(
      authUserDto.login,
      authUserDto.tabel,
      authUserDto.password,
    );
  }
}
