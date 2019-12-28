const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
         rules: [
           {
             test: /\.js$/,
             use: [
               'babel-loader'
                ]
           },{
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      publicPath: './src/img',
                      outputPath: './img',
                      emitFile: false
                    }  
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                    }
                  },
                ]
           },{
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            }
         ]
  }
};