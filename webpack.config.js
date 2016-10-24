/**
 * Created by raychen on 2016/10/16.
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/views/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/views/public",//打包后的文件存放的地方
        filename: "bundle.js",//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ["style?modules", "css?modules", "sass?modules"]
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'//跟前面相比就在后面加上了?modules
            },
            //{
            //    test: /\.css$/,
            //    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            //},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=50000&name=[path][name].[ext]'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
    devServer: {
        contentBase: "./views/public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 4004
    }
}