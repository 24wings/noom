import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
@Entity()
export class Edition {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ description: '版本名称' })
  @Column({ length: 32 })
  name: string;
  @ApiProperty({ description: '显示名称' })
  @Column({ length: 64 })
  displayName: string;
  @ApiProperty({ description: '过期' })
  @Column({ nullable: true })
  expiringEditionId: number;
  @ApiProperty({ description: '每月价格' })
  @Column({ nullable: true })
  monthlyPrice: number;
  @Column({ nullable: true })
  annualPrice: number;
  @Column({ nullable: true })
  trialDayCount: number;
  @Column({ nullable: true })
  waitingDayAfterExpire: number;

  get isFree() {
    return !(this.annualPrice || this.monthlyPrice);
  }
}
