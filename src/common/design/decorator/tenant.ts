export class STColumn {
  /**
    * 用于定义数据源主键，例如：`statistical`
    */
  key?: string;
  /**
   * 列标题
   */
  title?: string;
  /**
   * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法，例如：
   * - `id`
   * - `price.market`
   * - `[ 'price', 'market' ]`
   */
  index?: string | string[] | null;
  /**
   * 类型
   * - `no` 行号，计算规则：`index + noIndex`
   * - `checkbox` 多选
   * - `radio` 单选
   * - `link` 链接，务必指定 `click`
   * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
   * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
   * - `enum` 枚举转换，务必指定 `enum` 参数配置标签对应值
   * - `img` 图片且居中(若 `className` 存在则优先)
   * - `number` 数字且居右(若 `className` 存在则优先)
   * - `currency` 货币且居右(若 `className` 存在则优先)
   * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
   * - `yn` 将`boolean`类型徽章化 [document](https://ng-alain.com/docs/data-render#yn)
   * - `widget` 使用自定义小部件动态创建
   */
  type?: 'checkbox' | 'link' | 'badge' | 'tag' | 'enum' | 'radio' | 'img' | 'currency' | 'number' | 'date' | 'yn' | 'no' | 'widget';
  /**
   * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
   */
  // click?: (record: STData, instance?: STComponent) => any;
  /**
   * 按钮组
   */
  // buttons?: STColumnButton[];
  /**
   * 自定义渲染ID
   * @example
   * <ng-template st-row="custom" let-item let-index="index" let-column="column">
   *  {{ c.title }}
   * </ng-template>
   */
  render?: string;
  /**
   * 标题自定义渲染ID
   * @example
   * <ng-template st-row="custom" type="title" let-c>
   *  {{ item | json }}
   * </ng-template>
   */
  renderTitle?: string;
  /**
   * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
   *
   * **注意：** 若固定列必须是数字
   */
  width?: string | number;

  /**
   * 过滤配置项
   */
  // filter?: STColumnFilter;
  /**
   * 格式化列值
   */
  // format?: (item: STData, col: STColumn, index: number) => string;

  /**
   * 列 `class` 属性值（注：无须 `.` 点）多个用空格隔开，例如：
   * - `text-center` 居中
   * - `text-right` 居右
   * - `text-success` 成功色
   * - `text-danger` 异常色
   */
  className?: string;
  /**
   * 合并列
   */
  colSpan?: number;
  /**
   * 数字格式，`type=number` 有效
   */
  numberDigits?: string;
  /**
   * 日期格式，`type=date` 有效，（默认：`yyyy-MM-dd HH:mm`）
   */
  dateFormat?: string;

  /**
   * 是否允许导出，默认 `true`
   */
  exported?: boolean;
  /**
   * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
   */
  acl?: any;
  /** 当不存在数据时以默认值替代 */
  default?: string;
  /**
   * 固定前后列，当指定时务必指定 `width` 否则视为无效，有若干 **注意：** 项：
   *
   * - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
   * - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`
   */
  fixed?: 'left' | 'right';


  /**
   * 行号索引，默认：`1`
   * - 计算规则为：`index + noIndex`
   * - 支持自定义方法
   */
  // noIndex?: number | ((item: STData, col: STColumn, idx: number) => number);
  /**
   * 条件表达式
   * - 仅赋值 `columns` 时执行一次
   * - 可调用 `resetColumns()` 再一次触发
   */
  iif?: (item: STColumn) => boolean;
  /**
   * 统计列数据
   * - 若使用自定义统计函数可无须指定 `index`
   * - 可以根据 `key` 来定义生成后需要的键名，如果未指定 `key` 则使用 `index` 来表示键名
   * - 当无法找到有效键名时，使用下标（从 `0` 开始）来代替
   */
  enum?: {
    [key: string]: string;
    [key: number]: string;
  };
  /**
   * 分组表头
   */
  /** @ignore internal property */
  [key: string]: any;
}

export class StableButton {
  text: string;
  action: 'create' | 'update' | 'custom';
  type: 'primary' | 'default';
  icon: 'plus';
  id?: string;

}

export class StableTableMeta {
  loadUrl: string;
  columns: STColumn[];
  buttons: StableButton[]
}
