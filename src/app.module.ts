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
import { PassportModule } from './modules/passport/passport.module';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './modules/shop/shop.module';
import { AireActiveModule } from './modules/air-active/aire-active.module';
import { CoreModule } from './modules/core/core.module';
import { SmsModule } from './sms/sms.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleTaskService } from './sms/schedules/schedule-task.service';
import { getManager } from 'typeorm';
import { User } from './modules/passport/entitys/user.entity';
import { DatabaseModule } from './database/database.module';
import { KernelModule } from './kernel/kernel.module';
import { LocalizationModule } from './shared/localization/localization.module';

@Module({
  imports: [
    LocalizationModule,
    KernelModule,
    DatabaseModule,
    TypeOrmModule.forRoot(),
    PassportModule,
    SharedModule,
    ShopModule,
    AireActiveModule,
    CoreModule,
    CacheModule.register(),
    ScheduleModule.forRoot(),
    SmsModule,
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
export class AppModule  {
 
}


