// // 開發環境搭建
// 1. Node.js (下載安裝)
// 2. npm i -g typescript (全局安裝)
// 3. tsc xxx.ts (編譯)

// 4. tsc --init (tsconfig.json)
// 5. tsc --watch

// // webpack
// npm init -y
// npm install -D typescript@4.0.5
// npm install -D webpack@4.41.5 webpack-cli@3.3.10 webpack-dev-server@3.10.2
// npm install -D html-webpack-plugin@4.5.0 clean-webpack-plugin@3.0.0
// npm install -D ts-loader@8.0.11
// npm install -D cross-env@7.0.2

// // public/index.html

// // src/main.ts
// import './index.ts'

// // build/webpack.config.js
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')
// const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

// function resolve(dir) {
//   return path.resolve(__dirname, '..', dir)
// }

// module.exports = {
//   mode: isProd ? 'production' : 'development',
//   entry: {
//     app: './src/main.ts'
//   },

//   output: {
//     path: resolve('dist'),
//     filename: '[name].[contenthash:8].js'
//   },

//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         include: [resolve('src')]
//       }
//     ]
//   },

//   plugins: [
//     new CleanWebpackPlugin({}),

//     new HtmlWebpackPlugin({
//       template: './public/index.html'
//     })
//   ],

//   resolve: {
//     extensions: ['.ts', '.tsx', '.js']
//   },

//   devtool: isProd ? 'cheap-module-source-map' : 'eval-cheap-source-map',

//   devServer: {
//     host: 'localhost', // 主机名
//     stats: 'errors-only', // 打包日志输出输出错误信息
//     port: 8081,
//     open: true
//   }
// }

// // package.json 配置打包命令
// "dev": "cross-env NODE_ENV=development webpack serve --config build/webpack.config.js",
// "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"

// // 运行与打包
// npm run dev
// npm run build
 
// // 基本類型 number, boolean, string
// let a: number;
// a = 1;
// let b = 'hello'; // 如果同時聲明和賦值變量，TS可以自動對變量進行類型檢測 *

// // 使用字面量進行類型聲明
// let a: 10;
// // 聯合類型: 使用|來連接類型
// let b: 'male' | 'female';
// b = 'male';
// b = 'female';
// let c: boolean | string;
// c = true;
// c = 'hello';

// any 任意類型 關閉了TS的類型檢測(不建議)
// let a; // 隱式any
// // 可以賦值給任意變量
// a = 1;
// let b: string ;
// b = a; 

// // unknown 未知類型
// let a: unknown; 
// // 不可以賦值給任意變量
// a = 'hello';
// let b: string 
// b = a; // x

// // 1.
// if( typeof a === 'string' ){
//   let b: string = a;
// }

// // 2. 類型斷言
// let c: string
// c = a as string;
// let d: string 
// d = <string>a;

// // void 空值(undefined) 沒有返回值的函式

// // never 沒有值 永遠不會返回結果
// function fn(): never{ 
//   throw new Error('報錯了!');
// }

// // object
// let a: object; // 不實用
// a = {};
// a = function(){};
// // 
// let b: {name: string, age?:number};
// b = {name: 'aaa'};
// b = {name: 'aaa', age: 20};
// // [propName: string]: any 表任意類型的屬性 *****
// let c: {name: string, [propName: string]: any};
// c = {name: '123', age: 22, gender: '男', a: 1, istrue: true};
// let d: {name: string, [propName: number]: any};
// d = {name: '123', ...[22, '男', 1,true]};
 
// // function
// function number_sum(a: number, b: number): number{ 
//   return a + b;
// }
// // 
// let func: (a: number, b: number) => number;
// func = function(n1: number, n2: number): number{
//   return  n1 + n2;
// }

// // array
// let a: string[]; // 字符串數組
// a = ['1', '2', '3'];
// let b: Array<object>; // 泛型
// b = [{}, {}, {}];
// // touple 元組 (固定長度的數組)
// let c: [number, boolean, string];
// c = [1, true, 'hello'];

// // enum 枚舉 元素 編號從0開始遞增
// enum Gender{
//   Male = 1,
//   Female
// }
// let d: {name: string, gender: Gender};
// d = { name: 'aaa', gender: Gender.Male}
// console.log(d.gender === Gender.Male)
// console.log(Gender[2]) // Female

// // &
// let a: {name: string} & {age: number};
// a = {name: 'aaa', age: 12};

// // 類型別名
// type myType = 1|2|3|4|5;
// let a : myType;
// let b : myType;

// // 編譯選項
// tsconfig.json
// tsc -w

// // module
// import {hi} from '../js/test_js.js'
// console.log(hi);

// // outFile
// let aaa = "aaa";

// // noImplicitThis
// function fn(this: Window){
//   alert(this);
// }
// // strictNullChecks
// let box = document.querySelector('.box');
// box?.addEventListener('click', function(this: {}){
//   alert(this);
// })

// // class
// // 對象中主要包含兩個部分
// // 屬性
// // 方法
// class Person{
//   // 實例屬性(需要透過實例去訪問)
//   name = '孫悟空';

//   // 類屬性，靜態屬性(在屬性前使用static關鍵字，需要透過類去訪問)
//   static age = 18;

//   // readonly開頭的屬性，表唯讀
//   readonly name2 = '齊天大聖';

//   // 實例方法(需要透過實例去訪問)
//   sayHello(){
//     console.log('hello，大家好');
//   }

//   // 類方法，靜態方法(在方法前使用static關鍵字，需要透過類去訪問)
//   static sayHi(){
//     console.log('hi，大家好');
//   }
// }

// console.log(Person.name); // Person
// console.log(Person.age); // 18

// const per = new Person();
// console.log(per.name); // 孫悟空
// // console.log(per.age); // x
// // per.name2 = '美猴王'; // x
// per.sayHello();

// // 構造函數
// class Dog{
//   name: string;
//   age: number;
//   // 構造函數，會在對象創造時調用
//   constructor(name: string, age: number){
//     // 在實例方法中，this表當前實例
//     this.name = name;
//     this.age = age;
//   }

//   bark(){
//     alert(this.name + '汪汪汪!');
//   }
// }

// const dog = new Dog('小白', 7);
// const dog2 = new Dog('小黑', 1);

// dog.bark()
// dog2.bark()

// // 繼承
// class Animal{
//   name: string;

//   constructor(name: string){
//     this.name = name;
//   }

//   call(){
//     console.log(this.name + ' call!')
//   }
// }

// // Animal被稱為父類，Dog被稱為子類
// // 子類將擁有父類所有的方法和屬性
// class Dog extends Animal{
//   age: number;

//   // 如果在子類中寫了構造函數，必須對父類構造函數進行調用
//   constructor(name: string, age: number){
//     super(name);
//     this.age = age;
//   }

//   // override 方法重寫 
//   call(){
//     // super 父類
//     super.call();
//     console.log('汪汪汪!')
//   }
// }

// const dog = new Dog('小白', 5);
// console.log(dog);
// dog.call();

// // 抽象類: 不能用來創建對象，專門用來被繼承的類，可以添加抽象方法。
// abstract class Animal{
//   name: string;

//   constructor(name: string){
//     this.name = name;
//   }

//   // 抽象方法只能定義在抽象類中，子類必須對抽象方法進行重寫
//   abstract call(): void;
// }

// // const animal = new Animal('animal'); // x

// class Dog extends Animal{
//   age: number;

//   constructor(name: string, age: number){
//     super(name);
//     this.age = age;
//   }

//   call(){
//     console.log('汪汪汪!')
//   }
// }

// // 接口: 用來定義一個類的結構，也可以當成類型聲明來使用
// type myType = {
//   name: string, 
//   age: number
// };
// const obj: myType = {
//   name: 'sss',
//   age: 11
// }

// interface myInterface{
//   name: string,
//   age: number 
// }
// interface myInterface{
//   gender: string
// }
// const itfc: myInterface = {
//   name: 'sss',
//   age: 11,
//   gender: '男'
// }

// // 接口中的所有屬性都不能有實際的值，所有方法都是抽象方法
// interface myInterface{
//   name: string;
//   sayHello(): void;
// }

// class myClass implements myInterface{
//   name: string;

//   constructor(name: string){
//     this.name = name;
//   }

//   sayHello(): void {
//     console.log('大家好~~~');
//   }
// }

// // 接口 調用簽名 
interface ISearchFunc{
  (source: string, subString: string): boolean
}
const searchString: ISearchFunc = function( source: string, subString: string):boolean {
  return source.search(subString) > -1
}

// // 屬性封裝
// // 屬性可以任意被修改，會導致對象中的數據不安全，TS可以添加屬性修飾符
// // public 公共屬性，修飾的屬性可以在任意位置訪問修改默認值
// // private 私有屬性，修飾的屬性只能在類內部訪問修改默認值
// // protected 受保護屬性，修飾的屬性能在當前類及子類訪問修改默認值
// // 通過在類中添加方法使得私有屬性可以被外部訪問
// class Person{
//   public name: string;
//   private age: number;
//   private _gender: string;

//   constructor(name: string, age: number, gender: string){
//     this.name = name;
//     this.age = age;
//     this._gender = gender;
//   }

//   getAge(){
//     return this.age;
//   }
//   setAge(age: number){
//     if(age >= 0){
//       this.age = age;
//     }
//   }

//   get gender(){
//     return this._gender;
//   }
//   set gender(gender: string){
//     this._gender = gender;
//   }
// }

// // const per = new Person('孫悟空', 18, '男');
// // per.name = '豬八戒';
// // per.setAge(38);
// // per.getAge();

// // per.gender = '女';
// // console.log(per.gender);

// class A{
//   protected num: number;

//   constructor(num: number){
//     this.num = num;
//   }
// }

// class B extends A{
//   test(){
//     console.log(this.num)
//   }
// }

// // 直接將屬性定義在構造函數中
// class C{
//   constructor(public name: string, public age: number){
//   }
// }

// 泛型
// 在定義函數或類時，如果遇到類型不明確就可以使用泛型
function fn<T>(a: T): T{
  return a;
}
fn(10); // 不指定
fn<string>('hello'); //指定

// 泛型可以同時指定多個
function fn2<T, K>(a: T, b: K): T{
  return a;
}
fn2<number, string>( 123, 'hello');

// T extends Inter 泛型T必須是Inter的實現類
interface Inter{
  length: number;
}

function fn3<T extends Inter>(a: T): number{
  return a.length;
}
fn3('hello');
fn3({length: 10});


class myClass<T>{
  name: T;
  constructor(name: T){
    this.name = name;
  }
}
const mc = new myClass<string>('孫悟空');
