import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StatisticsInfo {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  'is_me': boolean;
  @Column()
  'view_num': number;
  @Column()
  'share_num': number;
  @Column()
  'order_num': number;
  @Column()
  'gmv': number;
  @Column()
  'profit': number;
  @Column()
  'salenum': number;
}
