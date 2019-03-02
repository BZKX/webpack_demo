/**
 * @author: LYLG_zkx
 * @Email: 347487522@qq.com
 * @date: 2019/3/2 11:42
 * @IDE: WebStorm
 */
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        progress: true,
        contentBase: './dist'
    },
    mode: "development",
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html"
        })
    ],

    module: {   //模块

        rules: [    //规则
            //TODO: 从下往上执行
            //css-loader ->接续@import这种语法
            //style-loader ->把css插入到head
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },  //可以写成对象
                    'css-loader']
            },
        ]

    }

};