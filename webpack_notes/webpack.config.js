// 引入一個包
const path = require('path'); // nodejs模塊，拼接路徑
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// webpack中的所有配置信息都應該寫在module.exports中
module.exports = {

  // 指定入口文件
  entry: "./src/index.ts",

  //
  output: {
    // 打包文件所在目錄
    // path: "./dist"
    path: path.resolve(__dirname, 'dist'),

    // 打包文件名稱
    filename: "bundle.js",

    // 不使用 arrowFunction
    environment: {
      arrowFunction: false
    }
  },

  // 指定webpack打包時要使用的模塊
  module: {
    // 指定要加載的規則
    rules:[
      {
        // 指定規則生效的文件
        test: /\.ts$/,

        // 要使用的loader
        use: [
          // 配置babel
          {
            // 加載器
            loader: "babel-loader",
            // 設置babel
            options: { 
              // 設置預定義環境
              presets: [
                [
                  // 指定環境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 兼容目標瀏覽器
                    targets:{
                      "chrome": "58",
                      "ie": "8"
                    },
                    "corejs": "3",
                    // 使用corejs的方式，"usage" 表按需加載
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader', 
        ],

        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
  ],

  // 設置引用模塊
  resolve: {
    extensions: ['.js', '.ts']
  }
}