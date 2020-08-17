import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  is_open: boolean;
  @Column()
  name: string;
  @Column()
  province: string;
  @Column()
  city: string;
  @Column()
  area: string;

  @Column({ nullable: true })
  topic_qrcode: string;
  @Column()
  topic_title: string;
  @Column({ nullable: true })
  topic_summary: string;
  /**这是啥 */
  wh_id: number;
  @Column()
  distribut_id: number;
  @Column({ nullable: true })
  topic_content: string;
}
