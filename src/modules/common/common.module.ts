import { Module } from '@nestjs/common';
import { WechatService } from '../../shared/services/wechat.service';
import { MockWechatService } from '../../shared/services/mock-wechat.service';
import { IWechatService } from '../../shared/services/i-wechat.service';
import { AbpController } from '../passport/controllers/abp.controller';
import { AppSessionController } from '../passport/controllers/app.session.controller';
import { CommonLookupController } from './controllers/common-lookup.controller';
import { CoreModule } from '../core/core.module';
import { FeatureService } from './services/feature.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feature } from '../core/entitys/feature.entity';
import { EditionController } from './controllers/edition.controller';

@Module({
  controllers: [CommonLookupController, EditionController],
  imports: [CoreModule, TypeOrmModule.forFeature([Feature])],
  providers: [
    { provide: IWechatService, useClass: MockWechatService },
    MockWechatService,
    FeatureService,
  ],
  exports: [
    { provide: IWechatService, useClass: MockWechatService },
    MockWechatService,
  ],
})
export class CommonModule {}
