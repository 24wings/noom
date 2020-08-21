import { PrimaryColumn, Column, Entity } from "typeorm";
@Entity()
export class Setting {
  @PrimaryColumn()
  name: string;
  @Column()
  value: string;
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}