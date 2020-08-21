import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  tenancyName: string;
  @Column({ default: true })
  isActive: boolean;
  @Column({ nullable: true })
  isInTrialPeriod: boolean;
  @Column({ nullable: true })
  subscriptionEndDateUtc: Date;
  @Column({ nullable: true })
  editionDisplayName: string;
  @Column({ nullable: true })
  creationTime: Date;
  @Column({ nullable: true })
  connectionString: string;
  @Column({ nullable: true })
  editionId?: string;

}