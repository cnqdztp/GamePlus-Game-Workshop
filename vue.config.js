// const { defineConfig } = require('@vue/cli-service')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//       filename: "index.html",
//       title: "Some title",
//       chunks: true
//     })
//   ]
// })

module.exports={
  transpileDependencies : true,
  chainWebpack: config =>{
    config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Gameplus创作坊设计'
          return args;
        })
  }
}
