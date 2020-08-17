import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, IsNull } from 'typeorm';
import { isNull } from 'util';
import { Edition } from 'src/modules/core/entitys/edition.entity';
import { Feature } from 'src/modules/core/entitys/feature.entity';
@Injectable()
export class FeatureService {
  constructor(
    @InjectRepository(Feature)
    private featureRepository: Repository<Feature>,
  ) {}

  findAll(): Promise<Feature[]> {
    return this.featureRepository.find();
  }

  findOne(id: number): Promise<Feature> {
    return this.featureRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.featureRepository.delete(id);
  }
  async add(data: Edition) {
    var newData = await this.featureRepository.create(data);

    let result = await this.featureRepository.insert(newData);
    let id = result.identifiers[0];
    console.log('create new User and id is' + JSON.stringify(id));
    newData.id = id.id;
    return newData;
  }
  async updateUser(data: Feature) {
    await this.featureRepository.update(data.id, data);
  }
  async filter(Filter: string, SkipCount: number = 0, MaxResultCount: number) {
    return this.featureRepository.findAndCount({
      where: { name: Like(`%${Filter}%`) },
      skip: SkipCount,
      take: MaxResultCount,
    });
  }
  async getEditonFree() {
    return this.featureRepository.find({
      where: { annualPrice: IsNull(), monthlyPrice: IsNull() },
    });
  }
}
