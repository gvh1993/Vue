const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const bundleOutputDir = './wwwroot/dist';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const devMode = isDevBuild ? 'development' : 'production';
    
    return [{
        mode: devMode,
        stats: { modules: false },
        context: __dirname,
        resolve: {
            extensions: ['.js', '.ts', '.vue'],
            alias: isDevBuild ? {
                'vue$': 'vue/dist/vue',
                'components': path.resolve(__dirname, './ClientApp/components'),
                'views': path.resolve(__dirname, './ClientApp/views'),
                'utils': path.resolve(__dirname, './ClientApp/utils'),
                // 'api': path.resolve(__dirname, './ClientApp/store/api')
            } : {
                'components': path.resolve(__dirname, './ClientApp/components'),
                'views': path.resolve(__dirname, './ClientApp/views'),
                'utils': path.resolve(__dirname, './ClientApp/utils'),
                // 'api': path.resolve(__dirname, './ClientApp/store/api')
            }
        },
        entry: { 'main': './ClientApp/app.js' },
        module: {
            rules: [
                { test: /\.vue$/, include: /ClientApp/, use: 'vue-loader' },
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: './dist/'
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                allchunks: true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })

        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new UglifyJsPlugin(),

        ])
    }];
};