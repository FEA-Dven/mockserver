const response = require('../../util/response.js');
const validator = require('../../util/requestValidator.js');
const activityValidation = require('../validation/activity.js');
const Mock = require('mockjs');

module.exports = {
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

    /**
    * @methods 获取结果页
    * @param {Object} ctx koa上下文 context
    **/
    getResultList: async function(ctx, next) {
        // 判断接口是否有传id
        await validator.validate(
            ctx.input,
            activityValidation.getResultList.schema,
            activityValidation.getResultList.options
        )
        const Random = Mock.Random;
        Random.word()
        Random.name()
        let data = Mock.mock({
            'describeList|1-5': ['@word'],
            'parcelRecordRedWinnerVoList|1-10': [{
                'avatarUrl': Random.image('100x100'), // 如果要给image指定大小
                'bonusAmount|1-2.1-2': 1,
                'nickname': '@name'
            }]
        })
        return response.map(ctx, data);
    }
}