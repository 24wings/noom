/// <summary>
/// Represents a localized string.

import { CultureInfo } from "./culture-info";

/// </summary>
export class LocalizedString {
  /// <summary>
  /// Culture info for this string.
  /// </summary>
  cultureInfo: CultureInfo;

  /// <summary>
  /// Unique Name of the string.
  /// </summary>
  name: string;

  /// <summary>
  /// Value for the <see cref="Name"/>.
  /// </summary>
  value: string;

  /// <summary>
  /// Creates a localized string instance.
  /// </summary>
  /// <param name="cultureInfo">Culture info for this string</param>
  /// <param name="name">Unique Name of the string</param>
  /// <param name="value">Value for the <paramref name="name"/></param>
  constructor(name: string, value: string, cultureInfo: CultureInfo) {
    this.name = name;
    this.value = value;
    this.cultureInfo = cultureInfo;
  }
}