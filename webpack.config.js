const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   mode: 'production',
   entry: path.resolve(__dirname, 'src/index.js'),
   output:{
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module:{
      rules:[{
         test: /\.scss$/i,
         use:[
            'style-loader',
            'css-loader',
            'sass-loader'
         ]
      }]
   },
   plugins:[
      new HtmlWebpackPlugin({
         title: 'Random Joke Generator',
         template: path.resolve(__dirname, 'src/index.html'),
         filename: 'index.html'
      })
   ]
}
