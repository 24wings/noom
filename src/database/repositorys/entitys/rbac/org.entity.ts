import { Column, Entity, Tree, TreeChildren, TreeParent, PrimaryGeneratedColumn, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Role } from "./role.entity";

@Entity()
@Tree("materialized-path")
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  code: string;
  @CreateDateColumn()
  creationTime: Date = new Date();
  @Column()
  creatorUserId: number;
  @Column()
  displayName: string;
  @Column({ nullable: true })
  lastModificationTime: Date;
  @Column({ nullable: true })
  lastModifierUserId: number;
  @Column({ nullable: true })
  memberCount: number;
  @Column({ nullable: true })
  parentId: number;
  @Column({ nullable: true })
  roleCount: number;
  @TreeChildren()
  children: Organization[];
  @TreeParent()
  parent: Organization;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[]
  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[]
}