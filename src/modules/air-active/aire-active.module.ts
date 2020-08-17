import { Module, HttpModule } from '@nestjs/common';
import { AirActiveController } from './controllers/air-active.controller';

@Module({
  controllers: [AirActiveController],
  imports: [HttpModule],
})
export class AireActiveModule {}
