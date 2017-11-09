const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.js'),//主入口文件
    output: {//存放目标文件
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',//提供解析源码，调试专用
    module:{
          rules:[
              { test: /\.js$/, loader: 'babel-loader', exclude:/node_modules/},//处理js相关的loader
              { test:/\.css$/, loader:['style-loader', 'css-loader'] },//处理css相关的loader
              { test:/\.scss$/, loader:['style-loader', 'css-loader', 'sass-loader'] },//处理scss的loader
              { test:/\.(png|jpg|gif|jpeg)$/, loader:'url-loader' },//这是处理路径的loader
          ]
      },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
    ]
}