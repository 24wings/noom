import { Module } from '@nestjs/common';
import { User } from './entitys/user.entity';
import { UsersService } from '../../shared/services/users.services';
import { UserController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { AppUserController } from './controllers/app.user.controller';
import { TokenController } from './controllers/token.controller';
import { AppSessionController } from './controllers/app.session.controller';
import { AbpController } from './controllers/abp.controller';
import { AppUserLinkController } from './controllers/app-user-link.controller';
import { CommissionController } from './controllers/commission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CommonModule],
  providers: [],
  controllers: [
    UserController,
    AppUserController,
    TokenController,
    AppSessionController,
    AbpController,
    AppUserLinkController,
    CommissionController,
  ],
  exports: [],
})
export class PassportModule {}
