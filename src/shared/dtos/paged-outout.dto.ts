import { CommonOutput } from './common-output.dto';

export class PagedOutput<T> {
  'targetUrl': string;
  'success': boolean;
  'error': boolean;
  'unAuthorizedRequest': boolean;
  '__abp': true;

  result: {
    items: T[];
    totalCount: number;
  };
  constructor(result: { items: T[]; totalCount: number }, ok: boolean) {
    this.result = result;
    this.success = ok;
    this.unAuthorizedRequest = false;
    this.__abp = true;
  }
}
