import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../entitys/rbac/user.entity";
import { Repository, Like } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  findByUsername(username: string) {
    return this.usersRepository.findOne({ where: { userName: username } });
  }
  findByOpenId(openId: string) {
    return this.usersRepository.findOne({ where: { openid: openId } });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async add(user: User) {
    var newUser = await this.usersRepository.create();
    newUser = Object.assign(newUser, user);
    let result = await this.usersRepository.insert(newUser);
    let id = result.identifiers[0];
    console.log('create new User and id is' + JSON.stringify(id));
    newUser.id = id.id;
    return newUser;
  }
  async updateUser(user: User) {
    await this.usersRepository.update(user.id, user);
  }
  async filter(Filter: string, SkipCount: number = 0, MaxResultCount: number) {
    return this.usersRepository.findAndCount({
      where: { nickname: Like(`%${Filter}%`) },
      skip: SkipCount,
      take: MaxResultCount,
    });
  }
}