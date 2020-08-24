import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../repositorys/entitys/rbac/user.entity";

@Injectable()
export class DefaultUserCreatorService implements OnApplicationBootstrap {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async onApplicationBootstrap() {
    const admin = this.userRepository.create({
      id: 1,
      userName: '2121718893@qq.com',
      nickname: 'admin',
      password: '123qwe'
    });


    await this.userRepository.save(admin);
  }


}