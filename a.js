// var { GetGoodsMenuItem } =require("src/modules/shop/dtos/get-goods-menu.output";
// import * as fs from 'fs';

// let data: GetGoodsMenuItem[] = require('./result');
// fs.writeFileSync(__dirname + "/result.md", '');



// fs.appendFileSync(__dirname + '/result.md', `|分类id|分类名称|商品id|商品名称|商品价格|商品图片|` + '\n')

// fs.appendFileSync(__dirname + '/result.md', `---|---|---|---|---|---` + '\n')
// let ids = data.map(item => item.goods_id);
// ids = uniq(ids);
// data = ids.map(id => data.find(item => item.goods_id == id))
// console.log(data.length)


// data.forEach(item => {
//   fs.appendFileSync(__dirname + '/result.md', `|${item.cat_id}|${item.categoryName}| ${item.goods_id}|${item.goods_name}|${item.cq_price}|![](${item.imageUrls[0]})` + '\n')
// })

// function uniq(array) {
//   var temp = []; //一个新的临时数组
//   for (var i = 0; i < array.length; i++) {
//     if (temp.indexOf(array[i]) == -1) {
//       temp.push(array[i]);
//     }
//   }
//   return temp;
// }
let d = new Map();
d.set('a', 1)
d.set('b', 2);
let arr = Array.from(d.values());
console.log(arr)