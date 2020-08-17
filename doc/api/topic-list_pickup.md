`GET` `/topic/list_pickup?topic_id=4550243` `HTTP/1.1`

```json
{"result":"ok",
"errcode":0,
"errmsg":"success",
"server_time":1596618265,
"rows":{"is_pop":0,
"list":
[
  {"pickup_id":139165,"pickup_name":"千鲜汇深圳水木澜山居社区团购点","topic_id":4550243,"is_open":0}]
  }
}

```


解析

请求中的topic_id在首次进入的时候传入0,实际上,这里只是查询当前的topic,topic应当理解为一场采购.而该接口用户查询当前的采购基本信息,如topic_id,pickup_id,topic_name.
每个社区都有许多场不同的采购.