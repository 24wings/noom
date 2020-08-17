import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { WebsiteRuleStatus } from './website-rule-status.enum';
@Entity()
export class WebsiteRule {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  startUrl: string;
  @Column()
  type: string;
  @Column()
  phoneInputXpath: string;
  @Column()
  sendSmsButtonXpath: string;
}
