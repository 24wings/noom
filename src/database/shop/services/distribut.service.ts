import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Distribut } from '../entitys/distribut.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class DistributService {
  constructor(
    @InjectRepository(Distribut)
    private distributRepository: Repository<Distribut>,
  ) {}

  findAll(
    filter: string,
    skip: number = 0,
    MaxResultCount = 10,
  ): Promise<Distribut[]> {
    return this.distributRepository.find({
      where: { shop_name: Like(`%${filter}%`) },
      skip,
      take: MaxResultCount,
    });
  }

  findOne(id: number): Promise<Distribut> {
    return this.distributRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.distributRepository.delete(id);
  }
  async add(data: Distribut) {
    var newData = await this.distributRepository.create(data);
    data.role = 0;
    data.serviceIndex = 0;

    let result = await this.distributRepository.insert(newData);
    let id = result.identifiers[0];
    console.log('create new User and id is' + JSON.stringify(id));
    newData.id = id.id;
    return newData;
  }
  async updateUser(data: Distribut) {
    await this.distributRepository.update(data.id, data);
  }
  async filter(filter: string, SkipCount: number = 0, MaxResultCount: number) {
    return this.distributRepository.findAndCount({
      where: { shop_name: Like(`%${filter}%`) },
      skip: SkipCount,
      take: MaxResultCount,
    });
  }
}
