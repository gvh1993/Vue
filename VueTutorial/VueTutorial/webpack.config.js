const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: "./wwwroot/src/index.ts",
    output: {
        path: path.resolve(__dirname, "wwwroot/dist"),
        filename: "build.js",
        publicPath: "/dist"
    },
    watch: true,
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
            }
        ]
    },
    plugins: [
        //new CleanWebpackPlugin(["wwwroot/src/dist/build.js"]),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./Views/Shared/_Layout.cshtml"
        }),
        new WebpackMd5Hash()
    ]
};