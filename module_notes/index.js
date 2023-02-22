// 不管是 ES5 module.exports 與 require 或 
//        ES6 import 與 export，
// 如果想在瀏覽器環境使用模組化 JavaScript 就必須透過 webpack 來搞定！

// 下載安裝 node.js
// npm install webpack webpack-cli --save-dev

// 建 webpack.config.js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

// ES5 module.exports 與 require
// module.js
function double(num){
  return num * 2;
}
module.exports = {
  double: double
};

// all.js
const myModule = require('./module/module');
console.log(myModule.double(10));

// ES6 import 與 export (支援度較差，需使用Babel)
// 1.
// module.js
export function double(num){
  return num * 2;
}
export function triple(num){
  return num * 3;
}

// all.js
import { double, triple } from './module/module';
console.log(double(10));
console.log(triple(10));

// 2.
// all.js
import * as myModule from './module/module';
console.log(myModule.double(10));
console.log(myModule.triple(10));

// 3.
// module.js
let str = '模組變數';
function double(num){
  return num * 2;
}
function triple(num){
  return num * 3;
}

export{
  double,
  triple,
  str as text
}

// all.js
import * as myModule from './module/module';
console.log(myModule.double(10));
console.log(myModule.triple(10));
console.log(myModule.text);

// 4. export 配合 default ，就可以 import 時不加 { } ，但只能有一個 default。
// module.js
export default function double(num){
  return num * 2;
}
function triple(num){
  return num * 3;
}

// all.js
import double from './module/module';
console.log(double(10));

