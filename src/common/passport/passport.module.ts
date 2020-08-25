import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { AppUserController } from './controllers/app.user.controller';
import { TokenController } from './controllers/token.controller';
import { AppSessionController } from './controllers/app.session.controller';
import { AppUserLinkController } from './controllers/app-user-link.controller';
import { CommissionController } from './controllers/commission.controller';
import { AuthModule } from 'src/common/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([]), CommonModule, AuthModule],
  providers: [],
  controllers: [
    UserController,
    AppUserController,
    TokenController,
    AppSessionController,
    AppUserLinkController,
    CommissionController,
  ],
  exports: [],
})
export class PassportModule { }
