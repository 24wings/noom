const fs = require('fs');
const path = require('path')
var parseString = require('xml2js').parseString;
let culture = 'ru';

let content = fs.readFileSync(path.resolve(__dirname, '../') + `/src/assets/Localization/SourceExt/AbpZero-${culture}.xml`, {
  encoding: 'utf-8'
});
// console.log(content)
parseString(content, function (err, result) {
  let obj = {}
  let data = result.localizationDictionary.texts[0].text
    .forEach(t => {
      obj[t.$.name] = t.$.value || t._;
      // return {

      //   text: t.$.name,
      //   i18n: t._

      // }
    });
  console.dir(obj);
  fs.writeFileSync(__dirname + `/${culture}.json`, JSON.stringify({
    culture: culture,
    texts: obj

  }))
})
/**
 * 
 
 }
 }))
 */