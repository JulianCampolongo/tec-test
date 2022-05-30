const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: false,
                        esModule: false
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "[name].[ext]",
                            outputPath: "assets/"
                        }
                    },
                ]
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "video/"
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test:  /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'resolve-url-loader', {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.mp3$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "[name].[ext]",
                            outputPath: "assets/"
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
        }),

        new HtmlWebpackPlugin({
            template: './src/app/view/AView/a-views-dos.html.html',
            filename: 'a-views-dos.html'
          }),

          new HtmlWebpackPlugin({
            template: './src/app/view/BView/b-views-dos.html.html',
            filename: 'b-views-dos.html'
          }),

          new HtmlWebpackPlugin({
            template: './src/app/view/CView/c-views-dos.html.html',
            filename: 'c-views-dos.html'
          }),

          new HtmlWebpackPlugin({
            template: './src/app/view/DView/d-views-dos.html.html',
            filename: 'd-views-dos.html'
          }),
        new ScriptExtHtmlWebpackPlugin({
            inline: 'main',
            module: 'main',
        }),
        new ExtractTextPlugin('styles.css'),

    ]
};
