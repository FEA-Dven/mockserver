/**
 * Created by Jerson on 2018/7/31
 */
const UUID = require('uuid');

module.exports = {
    genUUID: function () {
        let uuid = null;
        try {
            uuid = UUID.v1();
        } catch (error) {
            uuid = UUID.v4();
        }
        return uuid;
    },

    ip2long: function (ip) {
        let multipliers = [0x1000000, 0x10000, 0x100, 1];
        let longValue = 0;
        ip.split('.').forEach(function (part, i) { longValue += part * multipliers[i]; });
        return longValue;
    },

    long2ip: function (longValue) {
        let multipliers = [0x1000000, 0x10000, 0x100, 1];
        return multipliers.map(function (multiplier) {
            return Math.floor((longValue % (multiplier * 0x100)) / multiplier);
        }).join('.');
    },

    getClientIp: function (req) {
        let ip = (req.headers.hasOwnProperty('x-forwarded-for') ? req.headers['x-forwarded-for'] : '') ||
            req.ip ||
            (req.connection && req.connection.hasOwnProperty('remoteAddress') ? req.connection.remoteAddress : '') ||
            (req.socket && req.socket.hasOwnProperty('remoteAddress') ? req.socket.remoteAddress : '') || '';
        if (ip && ip !== '' && ip != null) {
            ip = ip.replace(/\s+/g, '');
            if (ip.indexOf(',') > -1) {
                let arrIp = ip.split(',');
                ip = arrIp.length >= 3 ? arrIp[arrIp.length - 3] : arrIp[0];
            }
            if (ip.indexOf(':') > -1) {
                let arrIp = ip.split(':');
                for (let j = 0; j < arrIp.length; j++) {
                    if (arrIp[j].indexOf(".") > -1) {
                        ip = arrIp[j];
                        break;
                    }
                }
            }
        }
        return ip;
    },

    /**
    * @author dven 
    * @methods 判断类型 
    * @param {Object/String/Number} 需要判断类型的对象
    * @param {String} type
    * @returns {Boolean} true为符合所指定的类型,false则不符合
    */
    matchByType: function(param, type){
        return type === (Number.isNaN(param) ? 'NaN' : Object.prototype.toString.call(param).replace(/\[object |\]/g, ''));
    },

    /**
    * @author dven 
    * @methods 前端自己做分页 
    * @param {Number} per_page 页面显示的最大数
    * @param {Number} page_number 页面显示的最大数
    * @param {Number} total 总数
    * @returns {Boolean} hasMore 是否还有下一页
    */
    getPageHasMore: function({per_page, page_number, total}) {
        let hasMore = true;
        if (per_page * page_number >= total){
            hasMore = false;
        }
        return hasMore;
    }
}