import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edition } from './entitys/edition.entity';
import { EditionController } from './controllers/edition.controller';
import { EditionService } from './services/edition.service';
import { Feature } from './entitys/feature.entity';

@Module({
  controllers: [EditionController],
  imports: [TypeOrmModule.forFeature([Edition])],
  providers: [EditionService],
  exports: [EditionService],
})
export class CoreModule {}
