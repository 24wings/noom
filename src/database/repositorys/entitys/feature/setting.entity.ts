import { CreateDateColumn, PrimaryColumn, Column, Entity } from "typeorm";

@Entity()
export class Setting {
  @PrimaryColumn()
  name: string;
  @Column()
  value: string;
  @CreateDateColumn()
  createTime: Date;
  constructor(name: string, value: string | boolean | number) {
    this.name = name;
    this.value = value + '';
  }
}