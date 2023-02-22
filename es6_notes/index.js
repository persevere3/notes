// // let const ============================================================
// var function scope
// let block scope
// const block scope
// let 和 const 宣告的變數一樣會被 hoist 提升到 scope 的最上方，
// 但和 var 不一樣的是，重複宣告變數會造成 TypeError 錯誤，
// 在變數宣告之前存取變數會造成 ReferenceError 錯誤

// // 箭頭函式 ============================================================
// let func = () => {
  
// }

// // 沒有arguments ------------------------------
// let func2 = (...arg) => {
//   console.log(arg)
// }

// // this綁定 函數定義時的環境 ------------------------------

// // 預設 ============================================================
// // 陣列 展開 ------------------------------
// let [A = 1, B = 2] = [5];
// console.log(A, B);

// // 物件 展開 ------------------------------
// let {c:C = 3} = {};
// console.log(C);

// // 函數 ------------------------------
// function func0(a, b = 1) {
//   return a * b;
// }
// func0(5);

// // 展開運算子 ============================================================
// let group1 = [ 'A', 'B', 'C' ];
// let group2 = [ 'D', 'E'];
// let group3 = group1.concat(group2)
// let groupAll = [...group1, ...group2]; // 展開
// func(1, 2, ...group1, 5); // 展開

// let objE = {
//   a: 1,
//   b: {}
// }
// let newObjE = {...objE} // 展開??? 淺複製
// console.log(newObjE);

// // 淺複製 ------------------------------
// let group3 = [ 'F', 'G'];
// let group4 = [...group3];
// group3.push('H'); 
// console.log(group4);

// // 類陣列 ------------------------------
// let lis = document.querySelectorAll('li');
// let lis_arr = [...lis];

// function func(){
//   let newArguments = [...arguments];
//   console.log(newArguments);
// }
// func(1, 2, 4);

// // 其餘運算子 ??? ============================================================
// ...newArguments 只能放在最後一個參數，用來獲取其餘的參數，
// newArguments 的值是一個陣列 (array)，用來存放獲取的參數。
// function func2(...newArguments){
//   console.log(newArguments);
// }
// func2(1, 2, 4);

// // 縮寫 ============================================================ 
// // 物件屬性 ------------------------------
// let a = 1;
// let objB = {
//   b: 2
// } 
// let objC = {
//   A,
//   objB
// }
// console.log(objC);

// // 物件方法 ------------------------------
// let objD = {
//   func(){

//   }
// }

// // 使用表達式 (expression) 作為屬性的名稱 ------------------------------
// let prefix = 'public';
// let obj = {
//     // 計算屬性
//     [prefix + 'Attribute']: '',
    
//     // 計算方法
//     [prefix + 'Method']() {
        
//     }
// };
// console.log(obj);

// // 解構賦值 ============================================================
// // arr ------------------------------
// let num = [1, 2, 3, 4, 5]
// let [a, b, c, d, e] = num;
// console.log(e);

// let A = 1;
// let B = 2;
// [A, B] = [B, A];
// console.log(B);

// let str = 'abcde';
// let[A, B, C, D, E] = str;
// console.log(E)

// // obj ------------------------------
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5
// }
// let {a, b, c} = obj;
// console.log(a);
// let {d: D, e: E} = obj;
// console.log(d, D);

// // super ??? ============================================================
// // 在物件的方法 (method) 中使用時，super 會指向父類別，只能用在 ES6 新的 method 語法。
// let parent = {
//   a: 'a of parent'
// }

// let child = {
//   a: 'a of child',
//   foo() {
//     console.log(this.a);
//     console.log(super.a)
//   }
// }

// Object.setPrototypeOf(child, parent);

// child.foo(); // a of child a of parent

// // 字串模板 ============================================================
// let arr = [
//   { name: 'A' },
//   { name: 'B' },
// ]

// let str = `
//   ${ arr.map( a => `<li>這是${a.name}</li>`).join('') }
// `
// console.log(str);

// // 模板標籤 ------------------------------
// let person = 'Mike';
// let age = 28;

// function myTag(strings, personExp, ageExp) {
//     let str0 = strings[0]; // "that "
//     let str1 = strings[1]; // " is a "

//     let ageStr = ageExp > 99 ? 'centenarian' : 'youngster';
//     return str0 + personExp + str1 + ageStr;
// }

// let output = myTag`that ${ person } is a ${ age }`;
// console.log(output); // that Mike is a youngster

// // for...of 遍歷陣列 ==========================================================
// // for: 冗長，forEach: 不能用break，for in: index 型態是 string，會遍歷到自定義的屬性，適合遍歷 object 屬性
// for (let index in myArray) {
//   console.log(myArray[index]);
// }

// for (let value of myArray) {
//   console.log(value);
// }

// for (let value of str) {
//     console.log(value);
// }

// // Promise ==========================================================
// // Promise 是一種非同步 (asynchronous) 編程的解決方案，
// // 所謂的 Promise，簡單來說它是一個等待非同步操作完成的物件，
// // 當事件完成時，Promise 根據操作結果是成功、或者失敗，做相對應的處理動作。

// // 一個 Promise 物件只會處於下面三種狀態之一：
// // pending - 初始狀態 (進行中)
// // fulfilled - 事件已完成
// // rejected - 事件已失敗

// // Promise 狀態的改變只有兩種可能：
// // 從 pending 變成 fulfilled
// // 從 pending 變成 rejected

// // 一但狀態改變就會固定，永遠不會再改變狀態了。

// let promise = new Promise(function(resolve, reject) {
//   if (異步操作成功) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// // Promise.prototype.then ------------------------------
// // Promise 物件生成後，
// // 可以用 then() 方法來綁定當 fulfilled 或 rejected 狀態時，分別要執行的函數。

// promise.then(function(value) {
//   // 當狀態是 fulfilled (成功) 時，執行這個函數
//   // value 是透過 resolve() 傳進來的參數
  
// }, function(error) {
//   // 當狀態是 rejected (失敗) 時，執行這個函數
//   // error 是透過 reject() 傳進來的參數
//   // 選擇性
// });

// // Promise.prototype.catch ------------------------------
// // Promise 物件生成後，可以用 catch() 方法來綁定當 rejected 狀態時，要執行的函數。

// let promise = new Promise(function(resolve, reject) {
//   throw 'Uh-oh!';
// });

// promise.catch(function(e) {
//   console.log(e);
// });

// // Chaining ------------------------------
// // then() 和 catch() 方法執行後都會返回一個新的 Promise 物件
// // 後面的 then() 會接收前一個 then() 的 return value 當作參數
// // 如果 return value 的型態不是 Promise，會先執行 Promise.resolve()。

// var hello = new Promise(function(resolve, reject) {
//   resolve('Hello');
// });

// hello.then(function(str) {
//   return str + ' World';
// }).then(function(str) {
//   return str;
// }).then(function(str) {
//   console.log(str); // 輸出 "Hello World"
// });

// // Promise.all ------------------------------
// // 將多個 Promise 物件包裝成一個 Promise 物件，
// // 他接受的參數可以是一個陣列，陣列中放不同的 Promise 物件。
// // 如果陣列中有元素的型態不是 Promise，會先執行 Promise.resolve()。

// // 狀態變為 fulfilled: 如果它包含的所有 Promise 物件狀態都變為 fulfilled。
// // 而所有 Promise 物件個別的返回值，會被組成一個陣列傳進 all Promise 物件的 callback
// // 狀態變為 rejected: 如果它包含的其中一個 Promise 物件狀態變為 rejected。
// // 第一個被 reject 的值會被傳進回 all Promise 物件的 callback

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'foo');
// }); 

// Promise.all([p1, p2, p3]).then(function(values) { 
//   console.log(values); // 顯示 [3, 1337, "foo"]
// });

// // Promise.race ------------------------------
// // 和 Promise.all() 一樣用來將多個 Promise 物件包裝成一個 Promise 物件。
// // 不同的地方在於，只要它包含的所有 Promise 物件其中任何一個的狀態先改變，
// // race Promise 物件的狀態就會跟著改變，率先改變狀態的 Promise 物件參數會直接傳給 race Promise 物件的 callback。

// var p1 = new Promise(function(resolve, reject) { 
//     setTimeout(resolve, 500, 'one'); 
// });
// var p2 = new Promise(function(resolve, reject) { 
//     setTimeout(resolve, 100, 'two'); 
// });

// Promise.race([p1, p2]).then(function(value) {
//   console.log(value); // 顯示 "two"，因為 p2 比較快被 resolve
// });

// // Promise.resolve(value) ------------------------------
// // 將一個物件轉型為 Promise (如果它不是一個 Promise 物件)，然後立刻 resolve 它。
// Promise.resolve('Success').then(function(value) {
//   console.log(value);
// }, function(value) {
//   console.log('Fail'); 
// }); // 輸出 "Success"

// // Promise.reject(reason) ------------------------------
// // 將一個物件轉型為 Promise (如果它不是一個 Promise 物件)，然後立刻 reject 它。
// Promise.reject(new Error('Fail')).then(function(error) {
//   console.log('Success');
// }, function(error) {
//   console.log('Fail');
// }); // 輸出 "Fail"