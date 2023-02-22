// // 寬高與位置 ============================================================
// // 取值 ------------------------------
// element.clientWidth 元素所包含的「子元素」的寬度（包含padding 不含 捲軸，border）較少用
// element.clientHeight 元素所包含的「子元素」的高度（包含padding 不含 捲軸，border）較少用

// element.offsetWidth 元素本身寬度（包含 padding，捲軸 和 border）
// element.offsetHeight 元素本身高度（包含 padding，捲軸 和 border）

// // 沒有捲軸的情況下，等於clientWidth/clientHeight
// element.scrollWidth 元素所包含的「子元素」的「完整」寬度（包含padding，border 不含 捲軸）
// element.scrollHeight 元素所包含的「子元素」的「完整」高度（包含padding，border 不含 捲軸）

// element.clientTop borderTop
// element.clientLeft borderLeft

// element.offsetTop 相對於上層的Y座標
// element.offsetLeft 相對於上層的X座標

// // 設置 ------------------------------
// element.style.width = '120px';
// element.style.height = '130px';

// element.scrollTop 內容物上邊界與可視區上邊界的距離
// element.scrollLeft 內容物左邊界與可視區左邊界的距離

// // getBoundingClientRect() ------------------------------
// element.getBoundingClientRect().top：元素於目前可視範圍中，距離上方邊界的距離。
// element.getBoundingClientRect().bottom：元素於目前可視範圍中，距離下方邊界的距離。
// element.getBoundingClientRect().left：元素於目前可視範圍中，距離左邊邊界的距離。
// element.getBoundingClientRect().right：元素於目前可視範圍中，距離右邊邊界的距離。
// element.getBoundingClientRect().x：元素於目前可視範圍中，水平方向的座標。
// element.getBoundingClientRect().y：元素於目前可視範圍中，垂直方向的座標。
// element.getBoundingClientRect().width：元素的寬。
// element.getBoundingClientRect().height：元素的高。

// // 正則 ============================================================


// // 字串方法 ============================================================
// // substr(start索引, 字元個數) 返回子字串，
// // start索引為負時與字串的長度相加，字元個數為負時變為0。

// // substring(start索引, end索引) 返回子字串，不包含end索引的字元,
// // 只寫一個參數表示從start索引到最後，
// // 參數為負時將負值變為0，
// // 索引小的作為start索引。

// // slice(start索引, end索引) 返回子字串，基本和substring相似，
// // 參數為負時與字串的長度相加，
// // end最終索引小於start最終索引，返回""
// // end索引絕對值大於等於字串的長度時，返回""。

// // concat(stringX, stringX, ..., stringX) 返回子字串串接而成的字串。

// // charAt() 返回索引字元。

// // indexOf(string) 返回第一次出現子字串的索引。如果沒有找到子字串，則返回-1。

// // split(str) 返回以子字串分割的陣列。

// // toLowerCase 返回小寫字串。
// // toUpperCase 返回大寫字串。

// // replace 使用新字串取代匹配正規表示式的字串。
// // search  返回與正規表示式匹配的第一個字串的位置。
// // match 返回與正規表示式匹配的字串陣列。

// // trim 返回 去除開頭和結尾處的空白字元的字串。

// // 陣列方法1 ============================================================
// // push     新增到最後面 返回新增後的陣列
// // pop      刪除最後一項 返回刪除後的陣列

// // unshift  新增到最前面 返回新增後的陣列
// // shift    刪除最前一項 返回刪除後的陣列

// // reverse  陣列翻轉     返回處理後的陣列

// // join     返回陣列轉化成的字串 

// // slice(start索引, end索引) 返回擷取陣列，不包含end索引 
   
// // concat 返回合併字串 

// // splice（start索引,個數,ele1,ele2…） 剪接原陣列並返回剪接陣列 
// // 只寫一個參數表示從start索引到最後，參數為負時與與陣列的長度相加。
// let arr=[1,2,3,4,5];
// console.log(arr.splice(1, 0, 6)); // []
// console.log(arr); // [1,6,2,3,4,5]

// // sort 排序 按ascii排序 
// let arr=[1,2,22,11,33,3];
// console.log(arr.sort()) // [1,11,2,22,3,33] 
// // a-b從小到大 b-a從大到小
// arr.sort(function(a,b){ return a-b})

// // 字串和陣列的綜合應用 ============================================================
// // 字母翻轉，首字母大寫 ------------------------------    
// let str='wo shi yi ge demo',
// arr = str.split(' ');
// for(let i = 0; i < arr.length; i++){
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
// }
// arr.reverse();
// str=arr.join(' ');

// // url參數解析 ------------------------------         
// function getData() {
//   let search = window.location.search.substring(1);
//   if (!search) {
//     return;
//   }
//   let arr = search.split('&'),
//   arr2 = [],
//   json = {}, key, value;
//   for (let i = 0; i < arr.length; i++) {
//     item = arr[i].split('=');
//     key = arr2[0];
//     value = arr2[1];
//     json[key] = value;
//   }
//   return json;
// }

// // 陣列方法2 ============================================================
// let arr = [
//   {
//     name: 'A',
//     age: 18
//   },
//   {
//     name: 'B',
//     age: 20
//   },
// ];

// // forEach ------------------------------
// arr.forEach(function(item, index, arr){
  
// })

// // map ------------------------------
// let newArr = arr.map(function(item, index, arr){
//   return{
//     ...item,
//     newAge: item.age + 1
//   }
// })
// console.log(newArr)

// // filter ------------------------------
// let newArr2 = arr.filter(function(item, index, arr){
//   return item.age > 18;
// })
// console.log(newArr2)

// // find (一筆) ------------------------------
// let newArr3 = arr.find(function(item, index, arr){
//   return item.age > 17;
// })
// console.log(newArr3)

// // every ------------------------------
// let bool = arr.every(function(item, index, arr){
//   return item.age > 17;
// })
// console.log(bool)

// // some ------------------------------
// let bool2 = arr.some(function(item, index, arr){
//   return item.age > 18;
// })
// console.log(bool2)

// // reduce ------------------------------
// let result = arr.reduce(function(prev, item, index){
//   return prev + item.age;
// }, 0)

// console.log(result)

// let result2 = arr.reduce(function(prev, item, index){
//   return  Math.max(prev, item.age);
// }, 0)

// console.log(result2)

// // 數學方法 ============================================================
// math.abs() 絕對值  
// math.ceil() 向上取整 
// math.floor() 向下取整
// math.round() 四捨五入 
// math.random() 返回一個介於0到1之間的小數(包含0，不包含1) 
// function getRan(m, n){
//   return Math.floor(Math.random()*(n-m) + m);
// }  

// // Date ============================================================
// // 建立一個表示現在的 Date 物件
// new Date();

// // 建立一個特定時間點的 Date 物件
// new Date(milliseconds); // 從 1970-01-01 00:00:00 UTC (格林威治標準時間) 開始累計到某時間點的毫秒數。
// new Date(year, month, date, hours, minutes, seconds) // hours24 小時制，month 0-11，不設定預設為 0。

// // 日期時間比較
// // 比較兩個 Date 物件的時間前後關係 >, <, <=, >=, <== 或 >== 
// // 比較兩個日期是否相等，要先將 Date 物件用 date.getTime() 轉換為數值型態

// // 將時間字串轉成從 格林威治標準時間 開始累計到現在的毫秒數：
// parse()

// // 取得是幾年 (yyyy)
// getFullYear()
// // 取得是幾月 (0-11)
// getMonth()
// // 取得是幾日 (1-31)
// getDate()
// // 取得是星期幾 (0-6)
// getDay()

// // 取得是幾時 (0-23)
// getHours()
// // 取得是幾分 (0-59)
// getMinutes()
// // 取得是幾秒 (0-59)
// getSeconds()

// // 取得從 格林威治標準時間 累計的毫秒數
// getTime()

// // 設定是幾年 (yyyy)
// setFullYear()
// // 設定是幾月 (0-11)
// setMonth()
// // 設定是幾日 (1-31)
// setDate()

// // 設定是幾時 (0-23)
// setHours()
// // 設定是幾分 (0-59)
// setMinutes()
// // 設定是幾秒 (0-59)
// setSeconds()

// // 用從 格林威治標準時間 累計的毫秒數 設定
// setTime()

// // axios ============================================================
// let vm = this;
// let url = `${vm.protocol}//${vm.api}/getProduct`;

// let params = `id=${vm.id}&num=${vm.num}`; ------------------------------
// let config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// };

// let formData = new FormData(); ------------------------------
// formData.append('id' , vm.id);
// formData.append('num' , vm.num);
// let config = {
//   headers: {
//     'Content-Type': 'multipart/form-data'
//   }
// };

// let json = {id: vm.id, num: vm.num}; ------------------------------
// vm.$http.post(url, params, config).then((res) => {
//   if(res.data.errormessage){
//     return
//   }
//   console.log(res); // data status statusText headers config
// })
// .catch((err) => {
//   console.error(err);
// });