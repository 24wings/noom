export class CultureInfo {
  name: string;
  nativeName: string;
  static CurrentUICulture: CultureInfo;

  static getCultureInfo(name: string, altName?: string): CultureInfo {
    return new CultureInfo(name,altName);
  }
  constructor(name?: string,altName?:string) {
    this.name = name;
    this.nativeName = altName;
  }
}