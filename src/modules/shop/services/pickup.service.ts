import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pickup } from '../entitys/pickup.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class PickupService {
  constructor(
    @InjectRepository(Pickup)
    private pickupRepository: Repository<Pickup>,
  ) {}

  findAll(): Promise<Pickup[]> {
    return this.pickupRepository.find();
  }

  findOne(id: number): Promise<Pickup> {
    return this.pickupRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pickupRepository.delete(id);
  }
  async add(data: Pickup) {
    var newData = await this.pickupRepository.create(data);

    let result = await this.pickupRepository.insert(newData);
    let id = result.identifiers[0];
    console.log('create new User and id is' + JSON.stringify(id));
    newData.id = id.id;
    return newData;
  }
  async updateUser(data: Pickup) {
    await this.pickupRepository.update(data.id, data);
  }
  async filter(topicId: number, SkipCount: number = 0, MaxResultCount: number) {
    return this.pickupRepository.findAndCount({
      where: { topic_id: topicId },
      skip: SkipCount,
      take: MaxResultCount,
    });
  }
}
