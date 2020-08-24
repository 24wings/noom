import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  userName?: string;

  /**微信昵称 */
  @Column()
  nickname?: string;
  /**微信头像 */
  @Column({ nullable: true })
  head_pic?: string;
  /**微信会话key */
  @Column({ nullable: true })
  session_key?: string;
  @Column()
  password?: string;
  @Column({ nullable: true })
  emailAddress?: string;

  /**是否激活 */
  @Column({ default: true })
  isActive?: boolean;
  @Column({ nullable: true })
  tctoken?: string;
  @Column({ nullable: true })
  openid?: string;

  @Column({ nullable: true })
  unionid?: string;
  @Column({ nullable: true })
  login_time: Date = new Date();
  @Column({ nullable: true })
  roleId?: number;

  @Column({ nullable: true, default: true })
  isEmailConfirmed?: boolean;
  @Column({ nullable: true })
  phoneNumber?: string;
  @Column({ nullable: true })
  creationTime?: Date = new Date();

  roles?: string[] = [];
  @ManyToMany(type => Role, { eager: false })
  @JoinTable()
  roleList?: Role[];
}
