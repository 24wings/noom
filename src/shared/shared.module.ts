import { Module, Global } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { UsersService } from './services/users.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtAuthGuard } from './guard/jwt.guard';
import { LocalAuthGuard } from './guard/local.guard';
import { User } from 'src/modules/passport/entitys/user.entity';
import { IWechatService } from './services/i-wechat.service';
import { MockWechatService } from './services/mock-wechat.service';
import { WechatService } from './services/wechat.service';
import { HttpUtilService } from './services/http-util.service';

const Providers = [
  UsersService,
  LocalStrategy,
  JwtStrategy,
  AuthService,
  JwtAuthGuard,
  LocalAuthGuard,
  IWechatService,
  MockWechatService,
  WechatService,
  HttpUtilService,
];
@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [...Providers],
  exports: [JwtModule, ...Providers],
})
export class SharedModule {}
