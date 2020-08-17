export class JsonLocalizationFile {
  /// <summary>
  /// Constructor
  /// </summary>
  public constructor() {
    this.texts = {};
  }

  /// <summary>
  /// get or set the culture name; eg : en , en-us, zh-CN
  /// </summary>
  public culture: string;

  /// <summary>
  ///  Key value pairs
  /// </summary>
  public texts: { [k: string] :string }
}