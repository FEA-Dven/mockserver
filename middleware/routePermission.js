const ApiError = require('../util/apiError.js');

module.exports = {
    /**
    * @methods 校验请求头，判断是否有带token
    */
    checkHeader: async function(ctx, next) {
        // 如果header没有带上token
        if (!ctx.headerInput.wxtoken) {
            throw new ApiError('request.validToken');
        }
        await next();
    }
}