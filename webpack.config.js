const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  let devMode = argv && argv.mode !== 'production';
  console.log('dev mode: ', devMode);

  const plugins = [
    new MiniCssExtractPlugin('main.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ];

  const minimizer = [
    new OptimizeCSSAssetsPlugin({
      sourceMap: devMode,
      map: {
        inline: false,
        annotation: true,
      },
    }),
  ];

  if (!devMode) {
    plugins.push(new BabelMinifyPlugin());
    minimizer.push(
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: devMode,
      })
    );
  }

  return {
    entry: './src/_app/js/app.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'src', 'assets'),
    },
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'source-map' : false,
    optimization: {
      minimizer: minimizer,
      splitChunks: {
        chunks: 'all',
        name: 'vendor',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src', '_app', 'js'),
      },
    },
    module: {
      rules: [
        /*
         * Javascript
         * */
        {
          test: /\.js$/,
          exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '_files'),
            path.resolve(__dirname, 'gulp'),
            path.resolve(__dirname, 'gulpfile.js'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      useBuiltIns: 'usage',
                      corejs: {
                        version: 3,
                      },
                    },
                  ],
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            },
          ],
        },

        /*
         * Styles
         * */
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: devMode,
                importLoaders: 3,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: devMode,
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: devMode,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: devMode,
              },
            },
          ],
        },
      ],
    },
    plugins: plugins,
  };
};
