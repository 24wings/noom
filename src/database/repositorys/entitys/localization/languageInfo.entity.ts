import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { LocalizationString } from './localization-string.entity';
@Entity()
export class LanguageInfo {
  @PrimaryColumn()
  /**
   *            Code name of the language. It should be valid culture code. Ex: "en-US" for American
   *English, "tr-TR" for Turkey Turkish.
   */
  name: string;
  @Column()
  /**
   *              Display name of the language in it's original language. Ex: "English" for English,
   *             "Türkçe" for Turkish.
   */
  displayName: string;
  /**
   * An icon can be set to display on the UI.
   *
   */
  @Column()
  icon: string;
  @Column()
  /**
   * Is this the default language?
   */
  isDefault: boolean;
  /**  Is this the language disabled? */
  @Column()
  isDisabled: boolean;
  @Column()
  /**Is this language Right To Left? */
  isRightToLeft: boolean;
  @OneToMany(type => LocalizationString, photo => photo.language,{eager:true})
  localizationStrings: LocalizationString[];

  
  constructor(
    name: string,
    displayName: string,
    icon: string,
    isDefault: boolean,
    isDisabled: boolean = false,
    isRightToLeft: boolean = false,
  ) {
    this.name = name;
    this.displayName = displayName;
    this.icon = icon;
    this.isDefault = isDefault;
    this.isDisabled = isDisabled;
    this.isRightToLeft = isRightToLeft;
  }
}
