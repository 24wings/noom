import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne } from "typeorm";
import { LanguageInfo } from "./languageInfo.entity";

@Entity()
export class LocalizationString{
  @PrimaryColumn()
  culture: string;
  @PrimaryColumn()
  sourceName: string;
  @Column()
  target: string;
  @ManyToOne(type => LanguageInfo, user => user.localizationStrings)

  language: LanguageInfo;

  constructor(culture: string, sourceName: string, target: string, language?) {
    this.culture = culture;
    this.target = target;
    this.sourceName = sourceName;
    this.language = language;
  }
}