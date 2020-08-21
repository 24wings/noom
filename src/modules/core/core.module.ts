import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edition } from '../../database/repositorys/entitys/edition/edition.entity';
import { EditionController } from './controllers/edition.controller';

@Module({
  controllers: [EditionController],
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  exports: [],
})
export class CoreModule { }
