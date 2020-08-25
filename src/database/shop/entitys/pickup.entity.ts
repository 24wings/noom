import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pickup {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  pickup_name: string;
  @Column()
  topic_id: number;
}
