import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { WebsiteRule } from '../entitys/website-rule.entity';

@Injectable()
export class WebsiteRuleService {
  constructor(
    @InjectRepository(WebsiteRule)
    private websiteRuleRepository: Repository<WebsiteRule>,
  ) {}

  findAll(): Promise<WebsiteRule[]> {
    return this.websiteRuleRepository.find();
  }

  findOne(id: number): Promise<WebsiteRule> {
    return this.websiteRuleRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.websiteRuleRepository.delete(id);
  }
  async add(data: WebsiteRule) {
    var newData = await this.websiteRuleRepository.create(data);

    let result = await this.websiteRuleRepository.insert(newData);
    let id = result.identifiers[0];
    console.log('create new User and id is' + JSON.stringify(id));
    newData.id = id.id;
    return newData;
  }
  async updateUser(data: WebsiteRule) {
    await this.websiteRuleRepository.update(data.id, data);
  }
  async filter(topicId: number, SkipCount: number = 0, MaxResultCount: number) {
    return this.websiteRuleRepository.findAndCount({
      where: { topic_id: topicId },
      skip: SkipCount,
      take: MaxResultCount,
    });
  }
}
