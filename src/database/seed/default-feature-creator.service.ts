import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Feature } from "../repositorys/entitys/feature/feature.entity";
import { FeatureScopes } from "../repositorys/entitys/feature/feature.enum";

@Injectable()
export class DefaultFeatureCreator implements OnApplicationBootstrap {
  constructor(@InjectRepository(Feature) private featureReponsitory: Repository<Feature>) { }
  async onApplicationBootstrap() {
    let defaultFature = this.featureReponsitory.create();
    defaultFature.displayName = 'aaa';
    defaultFature.scope = FeatureScopes.All;
    defaultFature.name = 'App.ChatFeature';
    defaultFature.defaultValue = 'false';
    defaultFature.description = 'summary';
    await this.featureReponsitory.save(defaultFature);
  }

}