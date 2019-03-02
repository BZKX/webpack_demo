/**
 * @author: LYLG_zkx
 * @Email: 347487522@qq.com
 * @date: 2019/3/2 9:10
 * @IDE: WebStorm
 */

let path = require('path');

module.exports = {
    mode: "development",//模式,两种: production,development
    entry: './main.js',//入口
    output: {
        filename: "bundle.js", //打包后的文件名
        path: path.resolve(__dirname,'dist')
    }
};