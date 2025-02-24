import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { AuthUserDto } from 'src/auth/dto/authUserDto';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async signIn(@Body() authUserDto: AuthUserDto) {
    return this.authService.signIn(
      authUserDto.login,
      authUserDto.tabel,
      authUserDto.password,
    );
  }
}
