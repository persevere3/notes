// // package.json
// npm init -y

// // npm install --save-dev  webpack webpack-cli typescript ts-loader
// npm i -D webpack webpack-cli typescript ts-loader

// // webpack.config.js

// // tsconfig.js 

// // package.json 
// "build": "webpack"

// // 
// npm i -D html-webpack-plugin
// webpack.config.js
// new HTMLWebpackPlugin({
//   template: "./src/index.html"
// }),

// // 
// npm i -D webpack-dev-server
// package.json 
// "start": "webpack serve --open chrome.exe"

// // 
// npm i -D clean-webpack-plugin
// webpack.config.js
// new CleanWebpackPlugin(),

// // 
// npm i -D @babel/core @babel/preset-env babel-loader core-js
// use: [
//   {
//     loader: "babel-loader",
//     options: { 
//       presets: [
//         [
//           "@babel/preset-env",
//           {
//             targets:{
//                 "chrome": "58",
//                 "ie": "8"
//             },
//             "corejs": "3",
//             "useBuiltIns": "usage"
//           }
//         ]
//       ]
//     }
//   },
//   'ts-loader', 
// ],

// // webpack.config.js 
// environment: {
//   arrowFunction: false
// }