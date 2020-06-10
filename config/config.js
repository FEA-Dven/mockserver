var config = {
    /**
     * env: 应用的运行环境
     * dev 开发环境
     * test 测试环境
     * pre-prod 预发布环境
     * prod 生产环境
     */
    "env": 'dev',

    /**
     * debug: 是否开启debug模式
     * true 开启，错误信息输出到客户端和日志文件
     * false 关闭，错误信息仅输出到日志文件
     */
    "debug": true,

    /**
     * port: 监听端口号配置
     */
    "port": 8080,

    /**
     * log_path: 日志存储目录
     */
    "log_path": "./logs/",

    /**
     * 应用要加载的路由配置
     */
    "routes": [
        './app/route/index.js'
    ]
};

module.exports = config;