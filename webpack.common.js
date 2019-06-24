const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin');


const webpack_rules = [];

let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};

webpack_rules.push(babelLoader);

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    optimization: {
        minimizer: [
          new TerserPlugin(),
          new HtmlWebpackPlugin({
              template: "./src/template.html",
              minify: {
                  removeAttributeQuotes: true,
                  collapseWhitespace: true,
                  removeComments: true
              }
          })
        ]
    }
}