const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            title: "[dev] Three"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    }
});