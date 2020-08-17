import { Module, HttpModule } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pickup } from './entitys/pickup.entity';
import { Topic } from './entitys/topic.entity';
import { PickupService } from './services/pickup.service';
import { TopicService } from './services/topic.service';
import { PickupController } from './controllers/pickup.controller';
import { TopicController } from './controllers/topic.controller';
import { Distribut } from './entitys/distribut.entity';
import { DistributService } from './services/distribut.service';
import { StatisticsInfo } from './entitys/statistics.entity';
import { DistrbutController } from './controllers/distrbut.controller';
import { OrderController } from './controllers/order.controller';
import { MonitorController } from './controllers/monitor.controller';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Pickup, Topic, Distribut]),
    HttpModule,
  ],
  providers: [PickupService, TopicService, DistributService],
  controllers: [
    PickupController,
    TopicController,
    DistrbutController,
    OrderController,
    MonitorController,
  ],
})
export class ShopModule {}
