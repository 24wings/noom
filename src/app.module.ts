import {
  Module,
  CacheModule,
  CacheInterceptor,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PassportModule } from './common/passport/passport.module';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './database/shop/shop.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { getManager } from 'typeorm';
import { DatabaseModule } from './database/database.module';
import { LocalizationModule } from './common/localization/localization.module';
import { ConfigurationModule } from './common/configuration/configuration.module';
import { AuthModule } from './common/auth/auth.module';
import { TenantModule } from './common/tenant/tenant.module';
import { EditionModule } from './common/edition/edition.module';
import { RbacModule } from './common/rbac/rbac.module';
import { AuditLogModule } from './common/audit-log/audit-log.module';
import { AppCacheModule } from './common/cache/cache.modue';
import { SettingModule } from './common/setting/setting.module';
import { DesignModule } from './common/design/design.module';

@Module({
  imports: [
    DesignModule,
    SettingModule,
    AppCacheModule,
    AuditLogModule,
    RbacModule,
    EditionModule,
    TenantModule,
    AuthModule,
    DatabaseModule,
    ConfigurationModule,
    TypeOrmModule.forRoot(),
    PassportModule,
    SharedModule,
    ShopModule,
    CacheModule.register(),
    ScheduleModule.forRoot(),
    LocalizationModule,

  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {

}


