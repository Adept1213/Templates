const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    devtool: 'inline-source-map',
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "[name].[hash].js"
    }, 
    plugins : [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }), 
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({filename: "[name].[hash].css",}),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.svg$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    devServer: {
        port: 4200
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all'
          }
      },
}