const Router = require('koa-router');
const activityController = require('../../controller/example/activity.js');

module.exports = function() {
    let router = new Router();

    // 获取默认活动配置
    router.get('/activity-parcel-service/parcel/lottery/getDefaultActivityId', activityController.getDefaultActivity);

    // 获取记录列表
    router.get('/activity-parcel-service/parcel/lottery/winners/red', activityController.getResultList);
    return router;
}