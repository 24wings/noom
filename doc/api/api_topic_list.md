`Get` `/topic/list_pickup?topic_id=0`
请求头

* mchid: 8001
* tctoken: mljyEHmFZW0Zk9Ut9AIWTa2lN8U40YqG2Reflys+ZSq2oK91MgtVVwmFXe/MEG/xtYETMy/sVYEetBk9HWtk8vCm1wPvNkTHqN9FJEF/GAaTGlUfMD47SQqjb3JrUhUEwbUBifAzf3ahqICzZTEE2XHn3w46NNyZy7ASaIrkjS0LN/t3T4J2J6jcAN7P0KyeS6YnxNj0hwVHmf1aOCl+YWXN

响应
```json
{
"result":"ok",
"errcode":0,
"errmsg":"success",
"server_time":1596617751,
"rows":{
  "is_pop":0,
  "list":[{"pickup_id":139165,"pickup_name":"千鲜汇深圳水木澜山居社区团购点","topic_id":4550243,"is_open":0}]
}
}
```

解析 根据请求头中的tctoken来获取用户的收货地址列表
