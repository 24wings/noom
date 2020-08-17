import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { Decimal } from 'decimal.js';
@ApiExtraModels()
@Entity()
export class Distribut {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  public id: number;
  @ApiProperty({ description: '角色', nullable: true })
  @Column({ nullable: true })
  public role: number;
  @ApiProperty({ description: '服务' })
  @Column({ nullable: true })
  serviceIndex: number;
  @ApiProperty({ description: '商户名称' })
  @Column({ nullable: true })
  shop_name: string;
  @ApiProperty({ description: '商户签名' })
  @Column({ nullable: true })
  shop_sign: string;
  @ApiProperty({ description: '门牌号', nullable: true })
  @Column({ nullable: true })
  neighbourNum: number;
  @ApiProperty({ description: '昵称', nullable: true })
  @Column({ nullable: true })
  nickname: string;
  @ApiProperty({ description: '取货列表', nullable: true })
  pickupList: string;
  @ApiProperty({ description: '头像', nullable: true })
  @Column({ nullable: true })
  headPic: string;
  @ApiProperty({ description: '省份', nullable: true })
  @Column({ nullable: true })
  province: string;
  @ApiProperty({ description: '城市', nullable: true })
  @Column({ nullable: true })
  city: string;
  @ApiProperty({ description: '区域', nullable: true })
  @Column({ nullable: true })
  area: string;
  @ApiProperty({ description: '经度' })
  @Column({ type: 'decimal', nullable: true })
  lat: Decimal;
  @ApiProperty({ description: '纬度' })
  @Column({ type: 'decimal', nullable: true })
  lng: Decimal;
}
