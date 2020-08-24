import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Feature } from "../../entitys/feature/feature.entity";

@Injectable()
export class FeatureService {
  constructor(@InjectRepository(Feature) private featureRepository: Repository<Feature>) { }

  findAll() {
    return this.featureRepository.find();
  }


}