import { Controller, Query, Body, Get, Post } from '@nestjs/common';
import { PickupService } from '../services/pickup.service';
import { PagedOutput } from 'src/shared/dtos/paged-outout.dto';
import { Pickup } from '../entitys/pickup.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('api/pickup')
export class PickupController {
  constructor(private pickupService: PickupService) {}
  @Get('getAll')
  async getAll(@Query('topicId') topicId: number) {
    let data = await this.pickupService.filter(topicId, 0, 10);
    return new PagedOutput<Pickup>(
      { items: data[0], totalCount: data[1] },
      true,
    );
  }
  @Post('create')
  async create(@Body() body: Pickup) {
    await this.pickupService.add(body);
    return { ok: true };
  }
  @Post('update')
  async update(@Body() body: Pickup) {
    await this.pickupService.updateUser(body);
    return { ok: true };
  }
}
