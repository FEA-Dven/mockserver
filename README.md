# mockserver
基于Koa2打造的一套Mock系统

## 用法
第一步:
> cnpm install pm2 -g or npm install pm2 -g

第二步:
> cnpm install or npm install

第三步:
添加路由
```javascript
// app/route/index.js
router.get('Your URL', Controller.Function);
```

第四步:
写接口函数+模拟数据
```javascript
// app/controller/redpack/activity.js

/**
* @methods 获取默认活动
*/
getDefaultActivity: async function(ctx, next) {
    // 可以校验前端传递的参数
    Mock.Random.id();
    let data = Mock.mock({
        'dataStatus|0-1': 0,
        'id': '@id',
        'styleType': 1
    })
    return response.map(ctx, data);
},
```

第五步:
开启服务 启动pm2 监听模式
> pm2 start app.js --watch
