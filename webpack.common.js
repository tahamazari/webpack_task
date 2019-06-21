const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


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
    devtool: "none",
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}