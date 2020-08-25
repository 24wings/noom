export class CateItem {
  'id': number;
  'name': string;
  'parent_id': 0;
  'cat_group': '1';
  'display_name': '';
  'display_flag': 0;
  'is_valid': 1;
  'image': string;
  'sort_order': number;
  'subjectList': [];
  'role_config': string;
  'is_reward_display': 0;
  'esid': null;
}
export class CateOutput {
  rows: CateItem[];
}
