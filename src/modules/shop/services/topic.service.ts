import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from '../entitys/topic.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private topicRepository: Repository<Topic>,
  ) {}

  findAll(): Promise<Topic[]> {
    return this.topicRepository.find();
  }

  findOne(id: number): Promise<Topic> {
    return this.topicRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.topicRepository.delete(id);
  }
  async add(data: Topic) {
    var newData = await this.topicRepository.create(data);

    let result = await this.topicRepository.insert(newData);
    let id = result.identifiers[0];
    console.log('create new User and id is' + JSON.stringify(id));
    newData.id = id.id;
    return newData;
  }
  async updateUser(data: Topic) {
    await this.topicRepository.update(data.id, data);
  }
  async filter(Filter: string, SkipCount: number = 0, MaxResultCount: number) {
    return this.topicRepository.findAndCount({
      where: { name: Like(`%${Filter}%`) },
      skip: SkipCount,
      take: MaxResultCount,
    });
  }
}
