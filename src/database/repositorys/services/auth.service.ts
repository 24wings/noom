import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/repositorys/entitys/rbac/user.entity';
import { UsersService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<User | null> {
    debugger;
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
