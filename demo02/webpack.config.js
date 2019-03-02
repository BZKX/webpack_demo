/**
 * @author: LYLG_zkx
 * @Email: 347487522@qq.com
 * @date: 2019/3/2 9:10
 * @IDE: WebStorm
 */
//引入path模块,相对路径->绝对路径-->resolve
let path = require('path');
//引入
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devServer: {//开发服务器的配置
        port: 3000,//端口号
        progress: true,//显示进度条
        contentBase: './dist'//开启后指向位置
    },

    mode: "development",//模式,两种: production,development
    entry: './main.js',//入口
    output: {
        filename: "bundle.js", //打包后的文件名
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [  //数组放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: "./template.html",
            filename: "./index.html",
        })

    ]
};