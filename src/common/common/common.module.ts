import { Module } from '@nestjs/common';
import { WechatService } from '../../shared/services/wechat.service';
import { MockWechatService } from '../../shared/services/mock-wechat.service';
import { IWechatService } from '../../shared/services/i-wechat.service';
import { CommonLookupController } from './controllers/common-lookup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditionController } from './controllers/edition.controller';
import { Feature } from 'src/database/repositorys/entitys/feature/feature.entity';

@Module({
  controllers: [CommonLookupController, EditionController],
  imports: [TypeOrmModule.forFeature([Feature])],
  providers: [
    { provide: IWechatService, useClass: MockWechatService },
    MockWechatService,
  ],
  exports: [
    { provide: IWechatService, useClass: MockWechatService },
    MockWechatService,
  ],
})
export class CommonModule { }
