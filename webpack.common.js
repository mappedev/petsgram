const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petsgram',
      description:
        'Tu app preferida para encontrar esas mascotas que tanto te encantan',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      crossorigin: 'use-credentials',
      background_color: '#456BD9',
      theme_color: '#456BD9',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons'),
          ios: true,
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 7000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp(
            'https://petsgram-server-mappedev-339gmifsh.vercel.app/'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
};
