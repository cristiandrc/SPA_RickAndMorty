const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@sass': path.resolve(__dirname, 'src/sass/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
        }
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyPlugin(
            {
                patterns: [
                    {
                        from: path.resolve(__dirname, "src", "assets/images"),
                        to: "assets/images"
                    }
                ]
            }
        )
    ],

    module: {
        rules: [
            {
                test: /\.m$js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.s[ac]ss$/i,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },



    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        historyApiFallback: true,
        port: 8080,
    }
}