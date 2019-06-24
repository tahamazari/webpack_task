const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    devtool: "none",
    output: {
        filename: "main[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }
})