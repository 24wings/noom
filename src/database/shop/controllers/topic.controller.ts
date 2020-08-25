import { Module, Controller, Query, Get, Body, Post } from '@nestjs/common';
import { PickupService } from '../services/pickup.service';
import { PagedOutput } from 'src/shared/dtos/paged-outout.dto';
import { Pickup } from '../entitys/pickup.entity';
import { Topic } from '../entitys/topic.entity';
import { TopicService } from '../services/topic.service';
import { CommonOutput } from 'src/shared/dtos/common-output.dto';
import { BaseInfo } from '../dtos/base-info-output.dto';
import { ApiTags, ApiQuery, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { ListPickupOutput } from '../dtos/list-pickup-output.dto';
import { IsUpgradedLogicWhOutput } from '../dtos/isUpgradedLogicWh-output.dto';
import { PageGoodsOutputDto } from '../dtos/page-goods.output';
import { GetGoodsOutputDto } from '../dtos/get_goods-output.dto';
import { PickForPostOutput } from '../dtos/pickup_for_post.output';

@Controller('api/topic')
export class TopicController {
  constructor(private topicService: TopicService) {}
  @ApiTags('admin')
  @Get('getAll')
  async getAll(
    @Query('filter') filter: string = '',
    @Query('province') province: string,
    @Query('skip') skip: number = 0,
    @Query('maxResultCount') maxResultCount: number = 10,
  ) {
    console.log(skip);
    let data = await this.topicService.filter(filter, skip, maxResultCount);
    return new PagedOutput<Topic>(
      { items: data[0], totalCount: data[1] },
      true,
    );
  }
  @ApiTags('admin')
  @Post('create')
  async create(@Body() body: Topic) {
    let result = await this.topicService.add(body);
    return { ok: true };
  }
  @ApiTags('admin')
  @Post('update')
  async update(@Body() body: Topic) {
    await this.topicService.updateUser(body);
    return { ok: true };
  }

  @ApiOperation({ summary: '获取活动基本信息' })
  @ApiTags('shop')
  @ApiQuery({ name: 'topic_id', description: '活动id' })
  @ApiQuery({ name: 'pickup_id', description: '取货点id' })
  @ApiResponse({ status: 200, type: BaseInfo })
  @Get('baseinfo')
  async baseinfo(
    @Query('topic_id') topic_id: number,
    @Query('pickup_id') pickup_id: number,
  ): Promise<BaseInfo> {
    return require('../data/base-info.data').data;
  }

  @ApiOperation({ summary: '获取当前有效的活动列表' })
  @ApiTags('shop')
  @ApiQuery({ name: 'topic_id', type: Number })
  @Get('list_pickup')
  @ApiResponse({ status: 200, type: ListPickupOutput })
  async list_pickup(
    @Query('topic_id') topic_id: number,
  ): Promise<ListPickupOutput> {
    return require('../data/topic.list-pickup');
  }

  @ApiTags('shop')
  @ApiResponse({ status: 200, type: IsUpgradedLogicWhOutput })
  @ApiQuery({ name: 'topic_id', type: Number })
  @Get('isUpgradedLogicWh')
  isUpgradedLogicWh(@Query('topic_id') topic_id: number) {
    return require('../data/isupgrade.data').data;
  }

  @ApiOperation({ summary: '获取当前商品列表' })
  @ApiTags('shop')
  @ApiQuery({ name: 'id', description: '用户id' })
  @ApiQuery({ name: 'type', description: '类型' })
  @ApiQuery({ name: 'page_index', description: '页数，从1开始' })
  @ApiQuery({ name: 'page_size', description: '每页数量' })
  @ApiResponse({ status: 200, type: PageGoodsOutputDto })
  @Get('pages_goods')
  async page_goods(
    @Query('id') id: number,
    @Query('type') type: number,
    @Query('page_index') page_index: number,
    @Query('page_size') page_size: number,
  ) {
    return require('../data/page_goods.data');
  }

  @ApiOperation({ summary: '获取商品详情' })
  @ApiTags('shop')
  @ApiQuery({ name: 'id', description: '用户id' })
  @ApiQuery({ name: 'goods_id', description: '商品id' })
  @ApiResponse({ status: 200, type: GetGoodsOutputDto })
  @Get('get_goods')
  async get_goods(goods_id: number, id: number): Promise<GetGoodsOutputDto> {
    return require('../data/get_goods.data').data;
  }

  @ApiOperation({ summary: '选择商品后的购买接口' })
  @ApiTags('shop')
  @ApiQuery({ name: 'topic_id', description: '活动id' })
  @ApiResponse({ status: 200, type: PickForPostOutput })
  @Get(`pickup_for_post`)
  pickup_for_post(@Query('topic_id') topic_id: number) {
    return require('../data/picup_for_post.data').data;
  }
}
