import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { FeatureScopes } from './feature.enum';

@Entity()
export class Feature {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
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
  @Column()
  scope: FeatureScopes;
}
