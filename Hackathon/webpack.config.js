const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

let HWPConfig = new HtmlWebpackPlugin({
    filename:'index.html',
    template:'./src/index.html',
    minify: false
});

let articlesHtmlPlugin = ['signup','login'];

let multiplesFiles = articlesHtmlPlugin.map(function(entryName) {
    return new HtmlWebpackPlugin({
        filename: entryName + '.html',
        template: `./src/${entryName}.html`
    })
});

module.exports = {
    entry:'./src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'./dist')
    },
    plugins: [
        HWPConfig,
        new MiniCssExtractPlugin({
            filename:'style.css'
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery: 'jquery'
        }),
        new webpack.SourceMapDevToolPlugin({})
    ].concat(multiplesFiles),
    devtool:false,
    module: {
        rules:[
            {
                test:/.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: '../fonts/',  
                    publicPath: '../static/fonts' 
                    }
                }]
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
}