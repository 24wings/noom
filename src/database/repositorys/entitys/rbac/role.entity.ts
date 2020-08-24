import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Permission } from '../authorization/permission.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  displayName: string;
  @Column({ default: false })
  isStatic: boolean;
  @Column()
  isDefault: boolean;
  @Column()
  creationTime: Date = new Date();
  @ManyToMany(type => Permission, { eager: true })
  @JoinTable()
  permissionList: Permission[];
}
