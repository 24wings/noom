import { Injectable } from '@nestjs/common';
import { UsersService } from './users.services';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../modules/passport/entitys/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findByUsername(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: { id: number; nickname: string }) {
    const payload = {
      nickname: user.nickname,
      id: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
