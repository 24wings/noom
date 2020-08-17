import {
  Module,
  CacheInterceptor,
  CacheModule,
  Injectable,
} from '@nestjs/common';
import { PageController } from './controllers/page.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebsiteRule } from './entitys/website-rule.entity';
import { WebsiteRuleController } from './controllers/website-rule.controller';
import { WebsiteRuleService } from './services/website-rule.service';
import { SmsTask } from './entitys/sms-task.entity';
import { SmsTaskController } from './controllers/sms-task.controller';
import { ScheduleTaskService } from './schedules/schedule-task.service';
import { WorkerController } from './controllers/worker.controller';
import { SmsTaskService } from './services/sms-task.service';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forFeature([WebsiteRule, SmsTask]),
  ],
  controllers: [
    PageController,
    WebsiteRuleController,
    SmsTaskController,
    WorkerController,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    WebsiteRuleService,
    ScheduleTaskService,
    SmsTaskService,
  ],
})
export class SmsModule {}
