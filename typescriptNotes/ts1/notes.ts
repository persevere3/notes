// https://www.bilibili.com/video/BV1yt411e7xV?p=1

// npm install -g typescript
// tsc index.ts

// tsc --init
// "outDir": "./js",
// Terminal => Run Task => typescript => tsc:watch

// boolean
// let flag:boolean = true;

// number
// let a:number = 123;

// string
// let str:string = 'ts';

// array
// 1. 
// let arr:number[] = [0,1,2];
// 2. 
// let arr:Array<number> = [0,1,2];

// tuple (元組 : array的一種)
// let arr:[string, number, boolean] = ['ts', 1, true]; 

// enum (枚舉)
// enum 枚舉名{
//   標示符 = 整型常數, 
//   標示符 = 整型常數, 
//   標示符 = 整型常數, 
// }; 
// enum Color {
//   red ,
//   green = 2,
//   blue ,
// }
// let c: Color=Color.red; // 0
// let c: Color=Color.green; // 2
// let c: Color=Color.blue; // 3 (2+1)

// any (任意)
// let box:any = document.querySelector(".box");

// null undefined 其他數據類型的子類型(包括never)
// let num: number | null | undefined;

// void
// function run(): void{
//   console.log('run');
// }
// function run():string{
//   return 'run';
// }

// never 其他數據類型的子類型(包括null 和 undefined)，代表從不會出現的值。
// let a: never;
// a = (()=>{
//   throw new Error('error');
// })()

// 函數聲明
// function run1():number{
//   return 123;
// }

// 匿名函數
// var run2 = function():number{
//   return 321;
// }

// 函數传參 (age 可選參數 默認參數)
// function getInfo(name:string, age?:number = 20 ):string{
//   if(age){
//     return `${name} --- ${age}`
//   } else {
//     return `${name} --- `
//   }
// }
// 可選參數須置於最後面

// 剩餘參數
// function sum(a:number, ...result:number[]):number{
//   var sum = 0;
//   for(var i = 0; i < result.length; i++){
//     sum += result[i];
//   }
//   return sum;
// }

// 函數重載 : 為同一函數提供多個函數類型定義 
// function getInfo(name:string):string;

// function getInfo(age:number):string;

// function getInfo(str:any):any{
//   if(typeof str === 'string'){
//     return '我叫 ' + str;
//   } else {
//     return '我' + str + '歲';
//   }
// }

// function getInfo(name:string):string;
// function getInfo(name:string, age:num):string;
// function getInfo(name:any,age?:any):any{
//   if(age){
//     return '我叫 ' + name + '我' + age + '歲';
//   } else {
//     return '我叫 ' + name;
//   }
// }

// es5 類 
// 構造函數和原型鏈裡面增加方法
// function Person(){
//   this.name = '張三';
//   this.age = 20;
//   this.run = function(){
//     alert(this.name + '在運動');
//   }
// }
// Person.prototype.sex = '男'; //原型鏈上的屬性會被多個實例共享，構造函數不會
// Person.prototype.work =function(){
//   alert(this.name + '在工作');
// }
// var p = new Person();
// p.run();
// p.work();

// 靜態方法
// Person.getInfo = function(){
//   alert('我是靜態方法');
// }
// Person.getInfo();

// es5 繼承 
// 對象冒充實現繼承
// function Web(){
//   Person.call(this);
// }
// var w = new Web();

// w.run(); // 對象冒充可以繼承構造函數的屬性和方法
// w.work(); //       不可繼承原型練上的屬性和方法

// 原型練實現繼承
// Web.prototype = new Person();
// var w = new Web();
// w.run(); 
// w.work(); 

// 原型鏈實現繼承的問題
// function Person(name, age){
//   this.name = name;
//   this.age = age;
//   this.run = function(){
//     alert(this.name + '在運動');
//   }
// }
// let p = new Person('李四', 20)
// p.run();

// function Web(name, age){
// }
// Web.prototype = new Person();
// var w = new Web('趙四',20); // 實例化子類時無法給父類传參
// w.run();

// 對象冒充 + 原型鏈 的組合繼承
// Web.prototype = Person.prototype;

// 原型鏈 + 對象冒充 的組合繼承
// function Web(name, age){
//   Person.call(this, name, age);
// }

// ts 中定義類 
// class Person {
//   name:string = '' // 屬性 前面省略public關鍵詞
//   constructor(n:string) { // 構造函數 實例化類的時候觸發的方法
//     this.name = n;
//   }
//   getName():string{
//     return this.name;
//   }
//   setName(name:string):void{
//     this.name = name;
//   }
// }
// var p = new Person('張三');
// p.setName('李四')
// console.log(p.getName());

// ts中實現繼承 extends，super
// class Person{
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   run():string{
//     return `${this.name}在運動`
//   }
// }
// class Web extends Person{
//   constructor(name:string){
//     super(name);
//   }
//   work(){
//     alert(`${this.name}在工作`)
//   }  
// }
// var w = new Web('王五');
// console.log(w.run());
// w.work();

// ts中 繼承的探討 : 父類的方法和子類的方法一致
// class Web extends Person{
//   constructor(name:string){
//     super(name);
//   } 
//   run():string{
//     return `${this.name}在運動 - 子類`
//   }
// }
// var w = new Web('王五');
// console.log(w.run()); // 子類

// 類裡面的修飾符　ts裡面定義屬性的時候給我們提供了　三種修飾符　
// public:    公有 在類裡面 子類 類外面 可以訪問　(默認)　
// protected: 保護 在類裡面 子類        可以訪問
// private:   私有 在類裡面             可以訪問
　
// 靜態屬性 靜態方法
// function $(element){
//   return new Base(element)
// }
// function Base(element){
//   this.element = element;
//   this.css = function(attr, value){
//     this.element.style[attr] = value;
//   }
// }
// $('#box').css('color','red'); // 實例
// $.get=function(){ // 靜態
// }

// 
// class Person {
//   public name:string = ''
//   static sex ='男' // 靜態屬性
//   constructor(name:string) {
//     this.name = name;
//   }
//   run():void{ // 實例方法
//     alert(`${this.name}在運動`);
//   }
//   static print(){ // 靜態方法 無法調用類裡面的屬性，可以調用靜態屬性
//     console.log(Person.sex);
//   }
// }

// var p = new Person('張三');
// p.run();
// console.log(p.sex);
// p.print();
// console.log(Person.sex);
// Person.print();


// 多態 : 父類定義一個方法不去實現，讓繼承他的子類去實現，每一個子類有不同的表現，屬於繼承
// class Animal{
//   name:string='';
//   constructor(name:string){
//     this.name = name;
//   }
//   eat(){ // 具體吃甚麼不知道，讓繼承他的子類去實現，每一個子類的表現不一樣
//     console.log('吃的方法');
//   }
// }
// class Dog extends Animal{
//   constructor(name:string){
//     super(name);
//   }
//   eat(){
//     return this.name + '吃狗糧'
//   }
// }
// class Cat extends Animal{
//   constructor(name:string){
//     super(name);
//   }
//   eat(){
//     return this.name + '吃貓糧'
//   }
// }

// typescript中的抽象類 : 他是提供其他類繼承的基類，不能直接被實例化
// 用abstract關鍵字定義抽象類和抽象方法，抽象類中的抽象方法不包含具體實現並且必須在派生類中實現
// abstract抽象方法只能出現在抽象類裡面
// 抽象類和抽象方法用來定義標準 : Animal 這個類要求他的子類必須包含eat方法

// abstract class Animal{
//   name:string='';
//   constructor(name:string){
//     this.name = name;
//   }
//   abstract eat():any;
// }

// class Dog extends Animal{ // 抽象類的子類必須實現抽象類裡面的抽象方法，不包含具體實現
//   constructor(name:any){
//     super(name);
//   }
//   eat(){
//     console.log(this.name + '吃狗糧');
//   }
// }

// var d = new Dog('小狗');
// d.eat();

// 接口的作用，在面相對向的編程中，接口是一種規範的定義，他定義了行為和動作的規範，
// 在程序設計裡面，接口起到一種限制和規範的作用。
// 接口定義了某一批類所需要要遵守的規範，接口不關心這些類的內部狀態數據，也不關心這些類裡方法的實現細節，
// 他只規定這批類裡必須提供某些方法，提供這些方法的類就可以滿足實際需要。
// typescript中的接口類似於java，同時還增加更靈活的接口類型，包括屬性，函數，可索引和類等。

// ts中自定義方法傳入參數對json進行約束
// function printLabel( labelledObj: { label: string }):void{
//   console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// 對批量方法進行約束
// 屬性接口 : 對傳入對象的約束
// interface FullName{
//   firstName: string; // ;結束
//   secondtName: string;
// } 
// function printName(name:FullName){
//   console.log(name.firstName + '-' + name.secondtName);
// } 

// printName({ // 傳入參數只能包含 firstName secondtName
//   age:20, // 不可傳入
//   firstName: '張',
//   secondtName: '三',
// });

// var obj = { // 傳入參數必須包含 firstName secondtName
//   age:20,　// 可傳入，但不能使用
//   firstName: '張',
//   secondtName: '三',
// }
// printName(obj);

// 接口 : 可選屬性
// interface FullName{
//   firsrName:string;
//   secondName?:string;
// }
// function getName(name:FullName){
//   console.log(name);
// }
// getName({
//   firsrName:'firsrName',
// })

// 原生js封裝的ajax
// interface Config{
//   type:string;
//   url:string;
//   data?:string;
//   dataType:string;  
// }

// function ajax(config:Config){
//   var xhr = new XMLHttpRequest();
//   xhr.open(config.type, config.url, true);
//   xhr.send(config.data);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//       if(config.dataType == 'json'){
//         console.log(JSON.parse(xhr.responseText));
//       } else {
//         console.log(xhr.responseText);
//       }
//     }
//   }
// }
// ajax({
//   type:'get',
//   url:'http://www.baidu.com',
//   dataType:'json'
// });

// 函數類型接口 : 對方法傳入的參數以及返回值進行約束
// 加密的函數類型接口
// interf ace encrypt{
//   (key:string, value:string):string;
// }
// var md5:encrypt = function(key:string, value:string):string{
//   return key + value;
// }
// console.log(md5('name','min'));

// 可索引接口 : 對數組，對象的約束 (不常用)
// interface UserArr{
//   [index:number]:string
// }
// var arr:UserArr=['aaa','bbb']


// interface UserObj{
//   [index:string]:string 
// }
// var obj:UserObj={name:'20'};

// 類類型接口 : 對類的約束，類似抽象類
// interface Animal{
//   name:string;
//   eat(str:string):void;
// }

// class Dog implements Animal{
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   };
//   eat(food:string):void{
//     console.log(this.name + '吃' + food)
//   };
// }

// var d = new Dog('小小');
// d.eat('土');

// 接口擴展 :　接口可以繼承接口
// interface Animal{
//   eat():void;
// }
// interface Person extends Animal{
//   work():void;
// }

// class Programmer{
//   public name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   coding(code:string){
//     console.log(this.name + code);
//   }
// }

// class Web extends Programmer implements Person {
//   constructor(name:string){
//     super(name)
//   }
//   eat(){
//     console.log(this.name + "吃");
//   }
//   work(){
//     console.log(this.name + "工作");
//   }
// }

// var c = new Web('小小');
// c.eat();
// c.work();
// c.coding('coding');

// 泛型 : 軟件工程中，我們不僅要創建一致的定義良好的API，同時也要考慮可重用性。
// 組件不僅能支持當前的數據類型，同時也能支持未來的數據類型，這在創建大型系統時提供了十分靈活的功能。
// 在像C#和Java這樣的語言中，可以使用泛型來創建可重用的組件，一個組件可以支持多種類型的數據。
// 這樣用戶就可以以自己的數據類型來使用組件。
// 通俗理解 : 泛型就是解決類，接口，方法的複用性，以及對不特定數據類型的支持。

// 泛型 : 支持不特定的數據類型，要求 : 傳入的參數和返回參數一致

// T表示泛型，具體甚麼類型是調用這個方法的時候決定
// function getData<T>(value:T):T{
//   return value;
// }
// getData<number>(123);
// getData<string>('123');

// 泛型類 : 比如有個最小推算法，需要同時支持返回數字和字符串兩種類型。通過類的泛型來實現
// class MinClass<T>{
//   public list:T[]=[];
//   add(num:T):void{
//     this.list.push(num);
//   }
//   min():T{
//     var minNum = this.list[0];
//     for(var i = 0; i < this.list.length; i++){
//       if(minNum>this.list[i]){
//         minNum=this.list[i];
//       }
//     }
//     return minNum;
//   }
// }

// var m1 = new MinClass<number>(); // 實例化類 並且制定了類的T代表的類型是number
// m1.add( 22 );
// m1.add( 11);
// console.log(m1.min());

// var m2 = new MinClass<string>(); // 實例化類 並且制定了類的T代表的類型是string
// m2.add('a');
// m2.add('c');
// console.log(m2.min());

// 函數類型接口
// interface ConfigFn{
//   (value1:string, value2:string):string;
// }

// var setData:ConfigFn = function(value1:string, value2:string):string{
//   return value1 + value2;
// }

// setData('name','張三');

// 泛型接口 1
// interface ConfigFn{
//   <T>(value1:T):T;
// };
// var getData:ConfigFn = function<T>(value:T):T{
//   return value;
// }; 
// getData<string>('張三');

// 泛型接口 2
// interface ConfigFn<T>{
//   (value1:T):T;
// };
// function getData<T>(value:T):T{
//   return value;
// };
// var myGetData:ConfigFn<string>=getData;
// myGetData('張三');

// 泛型 : 可幫助我們避免重複的代碼以及對不特定數據類型的支持(類型校驗)
// 把類當作參數的泛型類 :
// 1. 定義個類
// 2. 把類作為參數來約束數據傳入類型

// 定義一個ArticleCate的類這個類的作用就是映射數據庫字段然後定義一個MysqlDB的類這個類用於操作數據庫
// 然後把ArticleCate類作為參數傳入到MysqlDb中

// class ArticleCate{
//   title:string |undefined;
//   desc:string |undefined; 
//   status:number |undefined;
// }
// class MysqlDb{ //每操作一個數據庫表ArticleCate，就要重新定義傳入數據類型 info:ArticleCate => info:ArticleCate2
//   add(info:ArticleCate):boolean{
//     console.log(info);
//     return true;
//   }
// }
// var a = new ArticleCate();
// a.title='國內';
// a.desc='國內新聞';
// a.status=1;
// var Db = new MysqlDb();
// Db.add(a);

// 操作數據庫的泛型類
// class MysqlDb<T>{
//   add(info:T):boolean{
//     console.log(info);
//     return true;
//   }
//   updated(info:T,id:number):boolean{
//     console.log(info,id);
//     return true;
//   }
// }
// 給user表增加數據
// 1. 定義一個User類 和數據庫進行映射
// class User{
//   username:string |undefined;
//   password:string |undefined;
// }
// var u = new User();
// u.username = '張三';
// u.password = '123456';
// var Db = new MysqlDb<User>();
// Db.add(u);

// 2. 定義一個ArticleCate類 和數據庫進行映射
// class ArticleCate{
//   title:string | undefined;
//   desc:string | undefined;
//   status:number | undefined;
//   constructor(params:{
//     title:string | undefined,
//     desc:string | undefined,
//     status?:number | undefined,
//   }){
//     this.title = params.title;
//     this.desc = params.desc;
//     this.status = params.status;
//   }
// }
// var a = new ArticleCate({
//   title:'分類',
//   desc:'111',
// });
// var Db = new MysqlDb<ArticleCate>(); // 把類當作參數的泛型類
// Db.add(a);
// Db.updated(a,12);

// ====================================================================================================
// 功能: 定義一個操作數據庫的庫 支持Mysql Mssql MongoDb
// 要求1: Mysql MsSql MongoDb功能一樣 都有 add update delete get 方法
// 注意: 約束統一的規範，以及代碼重用
// 解決方案: 需要約束規範所以要定義接口，需要代碼重用所以要用到泛型
// 1. 接口: 在面向對象的編程中，接口是一種規範的定義，他定義了行為和動作的規範 
// 2. 泛型: 解決類，接口，方法的複用性

// interface DBI<T>{
//   add(info:T):boolean;
//   update(info:T, id:number):boolean;
//   delete(id:number):boolean;
//   get(id:number):any[];
// }

// 定義一個操作mysql數據庫的類 注意: 要實現泛型接口，這個類也應該是一個泛型類
// class MysqlDb<T> implements DBI<T>{
//   add(info: T): boolean {
//     console.log(info);
//     return true;
//   }
//   update(info: T, id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   delete(id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   get(id: number): any[] {
//     var list =[
//       {
//         title:'xxx',
//         dsc:'xxx',
//       }
//     ];
//     return list;
//   }
// }

// 定義一個操作mssql數據庫的類
// class MssqlDb<T> implements DBI<T>{
//   add(info: T): boolean {
//     console.log(info);
//     return true;
//   }
//   update(info: T, id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   delete(id: number): boolean {
//     throw new Error("Method not implemented.");
//   }
//   get(id: number): any[] {
//     var list =[
//       {
//         title:'xxx',
//         dsc:'xxx',
//       },
//       {
//         title:'xxx',
//         dsc:'xxx',
//       }
//     ];
//     return list;
//   }
// }
// 操作用戶表 定義一個User類和數據表作映射
// class User {
//   username:string | undefined;
//   password:string | undefined;
// }
// var u = new User();
// u.username = '張三';
// u.password = '123';

// var oMysql = new MysqlDb<User>(); // 類作為參數來約束數據傳入的類型
// oMysql.add(u);

// 換一個數據庫 : MssqlDb
// class User {
//   username:string | undefined;
//   password:string | undefined;
// }

// var u = new User();
// u.username = '張三MssqlDb';
// u.password = '123MssqlDb';

// var oMssql = new MssqlDb<User>(); // 類作為參數來約束數據傳入的類型
// oMssql.add(u);

// 獲取User表 ID = 4 的數據
// var data = oMssql.get(4);
// console.log(data);

// ====================================================================================================
// 模塊的概念 : "內部模塊"現在稱作"命名空間"。"外部模塊"現在則簡稱為"模塊"。
// 模塊在其自身的作用域裡執行，而不是在全局作用域裡:這意味著定義在一個模塊裡的變量，函數，類等等
// 在模塊外部是不可見的，除非明確地使用export形式之一導出它們。
// 相反，如果想使用其他模塊導出的變量，函數，類，接口等的時候，必須導入它們，可以使用import形式之一

// 模塊的概念 : 把一些公共的功能單獨抽離成一個文件作為一個模塊。模塊裡面的變量，函數，類等默認是私有的，
// 如果要在外部訪問模塊裡面的數據(變量，函數，類)，需要通過export暴露模塊裡面的數據(變量，函數，類...)。
// 暴露後我們通過import引入模塊就可以使用模塊裡面暴露的數據(變量，函數，類...)。

// import {MysqlDb, MssqlDb} from './modules/db';

// class User {
//   username:string | undefined;
//   password:string | undefined;
// }
// var u = new User();
// u.username = '張三';
// u.password = '123';
// var oMysql = new MysqlDb<User>();
// oMysql.add(u);
// var oMssql = new MssqlDb<User>();
// oMssql.add(u);

// ---------------

// import {UserClass, UserMysql, UserMssql} from './model/user';
// import {ArticleClass, ArticleMysql, ArticleMssql} from './model/article';

// var u = new UserClass();
// u.username = '張三';
// u.password = '123';

// UserMysql.add(u);
// UserMssql.add(u);

// console.log(UserMysql.get(1));
// console.log(UserMssql.get(1));

// console.log(ArticleMysql.get(1));
// console.log(ArticleMssql.get(1));

// ====================================================================================================
// 命名空間:
// 在代碼量較大的情況下，為了避免各種變量命名相衝突，可將相似功能的函數，類，接口等放置到命名空間內
// 同Java的包，.Net的命名空間一樣，Typescript的命名空間可以將代碼包裹起來，只對外暴露需要在外部訪問的對象。

// 命名空間和模塊的區別:
// 命名空間: 內部模塊，主要用於組織代碼，避免命名衝突。
// 模塊: ts的外部模塊簡稱，側重代碼的副用，一個模塊裡可能會有多個命名空間。

// export namespace A{
//   interface Animal{
//     name:string;
//     eat():void;
//   }
//   export class Dog implements Animal {
//     name:string;
//     constructor(theName:string){
//       this.name = theName;
//     }
//     eat(){
//       console.log(`${this.name}吃狗糧`)
//     }
//   }
// }
// var d = new A.Dog('狗');

// 裝飾器// ====================================================================================================
// 裝飾器是一種特殊類型的聲明，他能夠被附加到類，方法，屬性或參數上，可以修改類的行為。
// 裝飾器就是一個方法，可以注入到類，方法，屬性，參數上來擴展類，屬性，方法，參數的功能。
// 常見的裝飾器有 : 類裝飾器，屬性裝飾器，方法裝飾器，參數裝飾器
// 裝飾器的寫法 : 普通裝飾器(無法传參)，裝飾器工廠(可传參)
// 裝飾器是過去幾年中JS最偉大成就之一，已是es7的標準特性之一

// 1. 類裝飾器 : 在類聲明前被聲明(緊靠著類聲明)。 類裝飾器應用於類構造函數，可以用來監視，修改或替代類定義。
// 普通裝飾器(無法传參)
// function logClass(params:any){
//   //params就是當前類
//   params.prototype.apiUrl = '動態擴展的屬性';
//   params.prototype.run = function(){
//     console.log('我是一個 run 方法')
//   };
// }
// @logClass
// class HttpClient{
//   constructor(){
//   }
//   getData(){
//   }
// }
// var http:any = new HttpClient();
// console.log(http.apiUrl)

// 裝飾器工廠(可传參)
// function logClass(params:string){
//   //params就是當前類
//   return function(target:any){
//     console.log(target); // HttpClient
//     console.log(params); // hello

//     target.prototype.apiUrl = params;
//   }
// }
// @logClass('hello')
// class HttpClient{
//   constructor(){

//   }
//   getData(){

//   }
// }
// var http:any = new HttpClient();
// console.log(http.apiUrl);

// 類裝飾器表達式會在運行時當作函數被調用，類的構造函數作為其唯一的參數。
// 如果類裝飾器返回一個值，他會使用提供的構造函數來替換類的聲明。
// function logClass(target:any){
//   console.log(target);
//   return class extends target{
//     apiUrl:any = '我是修改過後的數據';
//     getData(){
//       console.log(this.apiUrl);
//     }
//   }
// }
// @logClass
// class HttpClient{
//   public apiUrl:string|undefined;
//   constructor(){
//     this.apiUrl="我是構造函數裡面的apiUrl";
//   }
//   getData(){
//     console.log(this.apiUrl);
//   }
// }
// var http = new HttpClient();
// http.getData()

// 屬性裝飾器:屬性裝飾器表達式會在運行時當作函數被調用，傳入下列兩個參數:
// 1. 對於靜態成員來說是類的構造函數，對於實例成員是類的原型對象。
// 2. 成員的名字
// 類裝飾器
// function logClass(params:string){
//   //params就是當前類
//   return function(target:any){
//     console.log(target); // HttpClient
//     console.log(params); // hello
//   } 
// }
// 屬性裝飾器
// function logProperty(params:any){
//   return function(target:any, attr:any){ // target:類的原型對象 attr:當前屬性名稱
//     console.log(target);
//     console.log(attr);
//     target.attr = params;
//   }
// }
// @logClass('hello')
// class HttpClient{
//   @logProperty('http://gmail.com')
//   public url:any | undefined
//   constructor(){
//   }
//   getData(){
//     console.log(this.url);
//   }
// }

// var http = new HttpClient();
// http.getData();

// 方法裝飾器
// 他會被應用到方法的屬性描述符上，可以用來監視，修改或者替代方法定義。
// 方法裝飾會在運行時傳入下列3個參數:
// 1. 對於靜態成員來說是類的構造函數，對於實例成員是類的原型對象 
// 2. 成員的名字。
// 3. 成員的屬性描述符。

// 方法裝飾器一
// 裝飾器
// function get(params:any){
//   return function(target:any, methodName:any, desc:any){
//     console.log(target); // HttpClient
//     console.log(methodName); // getData
//     console.log(desc); // 
//     target.apiUrl = 'xxx';
//     target.run = function(){
//       console.log('run');
//     }
//   }
// }

// class HttpClient{
//   public url:any | undefined
//   constructor(){
//   }
//   @get('hello')
//   getData(){
//     console.log(this.url);
//   }
// }

// var http:any = new HttpClient();
// console.log(http.apiUrl);
// http.run();

// 方法裝飾器二
// 裝飾器
// function get(params:any){
//   return function(target:any, methodName:any, desc:any){
//     console.log(target); // HttpClient
//     console.log(methodName); // getData
//     console.log(desc.value); // 

// 修改裝飾器的方法，把裝飾器方法裡面傳入的所有參數改為string類型
// 1. 保存當前方法
//     var oMethod = desc.value;
//     desc.value = function(...args:any[]){
//       args=args.map(value=>{
//         return String(value);
//       })
//       console.log(args);
//       oMethod.apply(this,args);
//     }
//   }
// }
// class HttpClient{
//   public url:any | undefined
//   constructor(){
//   }
//   @get('hello')
//   getData(...args:any[]){
//     console.log(args);
//     console.log(this.url);
//   }
// }
// var http=new HttpClient();
// http.getData(123,'xxx');

// 方法參數裝飾器
// 參數裝飾器表達式會在運行時當作函數被調用，可以使用參數裝飾器為類的原型增加一些元素數據，傳入下列三個參數:
// 1. 對於靜態成員來說是類的構造函數，對於實例成員是類的原型對象。
// 2. 參數的名字。
// 3. 參數在函數參數列表中的索引。

// function logParams(params:any){
//   return function(target:any, methodName:any, paramsIndex:any){
//     console.log(params); // xxx
//     console.log(target); // HttpClient
//     console.log(methodName); // getData
//     console.log(paramsIndex); // 0
//     target.apiUrl = params; 
//   }
// }

// class HttpClient{
//   public url:any | undefined
//   constructor(){
//   }
//   getData(@logParams('xxx') abc:any){
//     console.log(abc);
//   }
// }

// var http:any = new HttpClient();
// http.getData(123456); // 123456
// console.log(http.apiUrl); // xxx


// 裝飾器執行順序

// function logClass1(params:string){
//   return function(target:any){
//     console.log('類裝飾器1'); 
//   }
// }
// function logClass2(params:string){
//   return function(target:any){
//     console.log('類裝飾器2'); 
//   }
// }
// function logAttribute(params?:string){
//   return function(target:any,attrName:any){
//     console.log('屬性裝飾器');
//   }
// }
// function logMethods(params?:string){
//   return function(target:any, attrName:any, desc:any){
//     console.log('方法裝飾器');
//   }
// }
// function logParams1(params?:string){
//   return function(target:any, attrName:any, desc:any){
//     console.log('方法參數裝飾器1');
//   }
// }
// function logParams2(params?:string){
//   return function(target:any, attrName:any, desc:any){
//     console.log('方法參數裝飾器2');
//   }
// }


// @logClass1('hello')
// @logClass2('xxxxx')
// class HttpClient{
//   @logAttribute()
//   public apiUrl:string | undefined;
//   constructor(){
//   }
//   @logMethods()
//   getData(){
//     return true;
//   }
//   setData(@logParams1() attr1:any, @logParams2() attr2:any ){

//   }

// }

// var http = new HttpClient();
// http.getData();

// 屬性 => 方法 => 方法參數2 => 方法參數1 => 類2 => 類1
