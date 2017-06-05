var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

process.traceDeprecation = true;

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, "../public/app1"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
                    publicPath: '../public/app1'
                })
            },
            {
                test: /\.(svg|ttf|eot|woff(2)?)$/,
                loader: 'file-loader',
                query: {
                    name: '/assets/fonts/[name].[ext]'
                }
            },            
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '/assets/images/[name].[ext]'
                }
            }
            //,
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'images/',
            //                 publicPath: 'images/'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "../public/app1"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Welcome | Omnifood',
            lang: 'en',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
        new CleanWebpackPlugin(['../public/app1']),
        new CopyWebpackPlugin([
            {
                from: 'src/assets/images',
                to: 'assets/images'
            },
            {
                from: 'src/assets/fonts',
                to: 'assets/fonts'
            }
        ])
    ]
}