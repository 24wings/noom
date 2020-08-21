import { PrimaryGeneratedColumn, Entity, Column, PrimaryColumn } from "typeorm";
import { FeatureScopes } from "./feature.enum";

@Entity()
export class Feature {
 
  @PrimaryColumn()
  name: string;
  @Column()
  displayName: string;
  @Column()
  description: string;
  readonly _children: Feature[];
  attributes: Map<string, object>;
  parent: Feature;
  inputType: string;
  @Column()
  defaultValue: string;
  @Column({
    type: 'enum',
    enum: FeatureScopes,
    default: FeatureScopes.All
  })
  scope: FeatureScopes;

}