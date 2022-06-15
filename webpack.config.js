//引入一个 node.js 模块包
const path = require('path');

//引入 html-webpack 插件(名字可自定义)
const HTMLWebpackPlugin = require('html-webpack-plugin')


//👇 webpack 的所有配置信息都写在这里
module.exports = {
  //指定入口文件(主文件)
  entry:'./src/index.ts',

  //指定打包文件（打包后放在哪里）
  output:{
    //打包后的目录(__dirname 表示会自动拼接目录的路径名称)
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件名称
    filename: 'bundle.js'
  },

  //如何编译？指定打包时使用的模块
  module:{
    //指定要用到的 loader，加载的规则
    rules: [
      {
        //指定规则生效的文件(用正则表达式) 来匹配所有的 ts 或 tsx 文件
        test: /\.ts?$/, 
        // 要使用的 loader 加载器（比如加载资源？）
        use:'ts-loader',
        // 指定要排除的文件（一般排除node_modules)
        exclude: /node_modules/
      }
    ]
  },

  //配置 webpack 插件
  plugins:[
    new HTMLWebpackPlugin( //将会自动执行一个插件，生成一个 index.html 文件
      {
        // title:"这是一个自定义的 title",// 编译后的 html title
        template: './src/index.html', // 指定要使用的模板 html 文件
      }),
  ]
}
