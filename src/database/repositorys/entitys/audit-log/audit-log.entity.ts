import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  browserInfo: string;
  @Column({ nullable: true })
  clientIpAddress: string;
  @Column({ nullable: true })
  clientName: string;
  @Column({ nullable: true })
  customData: string;
  @Column({ nullable: true })
  exception: string;
  @Column({ nullable: true })
  executionDuration: number;
  @Column({ nullable: true })
  executionTime: Date = new Date();
  @Column({ nullable: true })
  impersonatorTenantId: number;
  @Column({ nullable: true })
  impersonatorUserId: number;
  @Column({ nullable: true })
  methodName: string;
  @Column({ nullable: true })
  parameters: string;
  @Column({ nullable: true })
  serviceName: string;
  @Column({ nullable: true })
  userId: number;
  @Column({ nullable: true })
  userName: string;
}