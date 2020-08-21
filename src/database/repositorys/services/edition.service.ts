import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, IsNull } from 'typeorm';
import { Edition } from '../entitys/edition/edition.entity';

@Injectable()
export class EditionService {
  constructor(
    @InjectRepository(Edition)
    private editionRepository: Repository<Edition>,
  ) { }

  findAll(): Promise<Edition[]> {
    return this.editionRepository.find();
  }

  findOne(id: number): Promise<Edition> {
    return this.editionRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.editionRepository.delete(id);
  }
  async add(data: Edition) {
    var newData = await this.editionRepository.create(data);

    let result = await this.editionRepository.insert(newData);
    let id = result.identifiers[0];
    console.log('create new User and id is' + JSON.stringify(id));
    newData.id = id.id;
    return newData;
  }
  async updateUser(data: Edition) {
    await this.editionRepository.update(data.id, data);
  }
  async filter(Filter: string, SkipCount: number = 0, MaxResultCount: number) {
    return this.editionRepository.findAndCount({
      where: { name: Like(`%${Filter}%`) },
      skip: SkipCount,
      take: MaxResultCount,
    });
  }
  async getEditonFree() {
    return this.editionRepository.find({
      where: { annualPrice: IsNull(), monthlyPrice: IsNull() },
    });
  }
}
