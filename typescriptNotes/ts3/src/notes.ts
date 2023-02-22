// npm install typescript -g
// tsc note2.ts
// npm install ts-node -g
// ts-node note2.ts

// static typing

let age: number = 1;
let myName: string = 'Jacob';
let obj: {
  name: string,
  age: number
} = {
  name: 'Jacob',
  age: 25
}
let arr: string[] = ['a', 'b', 'c'];

let func: () => string = () => {return 'Hi'};

class Person{};
let myClass: Person = new Person();

// type annotation 類型註解
let count: number;
// type inference 類型推斷
let countInference = 123;

function getTotal(one: number, two: number): number{
  return one + two;
}
let total = getTotal(1, 2);

function sayHello(): void{
  console.log('hello');
}

function errorFunc(): never{
  throw new Error();
  console.log('hello')
}

function forNever(): never{
  while(true){}
  console.log('hello')
}

function add({one, two} : {one: number, two: number}){
  return one + two;
}
let addTotal = add({one: 1, two: 2});

function getNumber({one}: {one: number}): number{
  return one;
}
let one = getNumber({one: 1});

let numArr: number[] = [1, 2, 3, 4, 5];
let myArr: (number | string )[] = [1, 'string', 2];

let objArr: {name: string, age:number}[] = [{
  name: 'A',
  age: 10
}, {
  name: 'B',
  age: 15
}]

// type alias 類型別名
type alias = {name: string, age: number};
class myClass2 {
  name: string = '1';
  age: number = 25;
}

let objArr2: myClass2[] = [{
  name: 'A',
  age: 10
}, {
  name: 'B',
  age: 15
}]

// 元組
let myArr2: [string, string, number] = ['a', 'student', 25];

// interface 

// let getData = (name: string, age: number, score: number) => {
//   console.log(name + '年齡是' + age);
//   console.log(name + '分數是' + score);
// }
// getData('A', 25, 80);

interface People {
  name: string;
  age: number;
  score: number;
  sex?: string;
  [propname:string]: any;
  say(): string;
};
let people = {
  name: 'B',
  age: 20,
  score: 70,
  sex: '男',
  phone: '0910123123',
  say(){
    return '安安';
  }
}

let getData2 = (people: People) => {
  console.log(people.name + '年齡是' + people.age);
  console.log(people.name + '分數是' + people.score);
  people.sex && console.log(people.name + '性別是' + people.sex);
  people.phone && console.log(people.name + '電話是' + people.phone);
} 
getData2(people);

//
class PeopleClass implements People{
  name = 'C';
  age = 20;
  score =  70;
  // sex = '男';
  // phone = '0910123123';
  say(){
    return '你好';
  }
}

interface Teacher extends People{
  // teach(): string;
}

//
let getData3 = (people: Teacher) => {
  console.log(people.name + '年齡是' + people.age);
  console.log(people.name + '分數是' + people.score);
  people.sex && console.log(people.name + '性別是' + people.sex);
  people.phone && console.log(people.name + '電話是' + people.phone);
} 

let people3 = {
  name: 'J',
  age: 18,
  score: 20,
  say(){
    return '你好';
  },
  teach(){
    return '0_0';
  },
}
getData3(people3);

// class
class MyClass3{
  content = 'Hi';
  sayHello(){
    return this.content;
  };
}

class MyClass4 extends MyClass3{
  sayHello(){
    return super.sayHello() + '你好';
  };
  sayHello2(){
    return super.sayHello() + '你好'+ '再見';
  };
}

let goddess = new MyClass4();
console.log(goddess.sayHello());
console.log(goddess.sayHello2());

// private protected public
class Person2{
  public name: string = 'A';
  public sayHello(){
    console.log(this.name + ' say Hello');
  }
}

class Teacher2 extends Person2{
  public sayBye(){
    console.log(this.name + ' say Bye');
  }
} 

let person2 = new Person2();
console.log(person2.name);
person2.name = 'jacob';
console.log(person2.name);
person2.sayHello();

// class constructor

class Person3{
  constructor(public name: string){}
}

let person3 = new Person3('jacob');
console.log(person3.name);

class Teacher3 extends Person3{
  constructor(public age: number){
    super('jac');
  }
}
let teacher3 = new Teacher3(12);
console.log(teacher3.name);
console.log(teacher3.age);

// getter setter static
class Person4{
  constructor(private _age: number){};
  get age(){
    return this._age;
  };
  set age(age: number){
    this._age = age;
  }
  static sayYes(){
    console.log('Yes');
  }
}

let person4 = new Person4(15);
console.log(person4.age);
person4.age = 16;
console.log(person4.age);

Person4.sayYes();

// 
class Person5{
  public readonly _name:string;
  constructor(name: string){
    this._name = name;
  }
}

let person5 = new Person5('ja');
// person5._name = 'jacob';
console.log(person5._name);

// abstract class 繼承抽象類需實現抽象方法
abstract class Person6{
  abstract skill(): string;
}

class Waiter6 extends Person6{
   skill(){
     return 'Waiter';
   }
}

class Teacher6 extends Person6{
  skill(){
    return 'Teacher';
  }
}

// tsconfig.json ts 編譯配置文件
// tsc -init => tsconfig.json

// 聯合類型，類型保護
interface Waiter7 {
  isTeacher: boolean;
  say: () => {};
}

interface Teacher7 {
  isTeacher: boolean;
  skill: () => {};
}

// 類型斷言
function judgeWho(animal: Waiter7 | Teacher7) {
  if(animal.isTeacher){
    (animal as Teacher7).skill();
  }
  else{
    (animal as Waiter7).say();
  }
}

// in
function judgeWhoTwo(animal: Waiter7 | Teacher7) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}

// typeof
function add7(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  } 
  return first + second;
}

// instanceof
class NumberObj {
  count: number = 0;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}

// enum
// 初
function getServe1(status: number) {
  if (status === 0) {
    return "massage";
  } else if (status === 1) {
    return "SPA";
  } else if (status === 2) {
    return "dabaojian";
  }
}
const result1 = getServe1(0);
console.log(`我要去${result1}`);

//中
const Status2 = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2,
};

function getServe2(status: any) {
  if (status === Status2.MASSAGE) {
    return "massage";
  } else if (status === Status2.SPA) {
    return "spa";
  } else if (status === Status2.DABAOJIAN) {
    return "dabaojian";
  }
}

const result2 = getServe2(Status2.MASSAGE);

console.log(`我要去${result2}`);

//高
enum Status3 {
  MASSAGE3,
  SPA3,
  DABAOJIAN3,
}

function getServe3(status: any) {
  if (status === Status3.MASSAGE3) {
    return "massage";
  } else if (status === Status3.SPA3) {
    return "spa";
  } else if (status === Status3.DABAOJIAN3) {
    return "dabaojian";
  }
}

console.log(Status3.MASSAGE3);
console.log(Status3.SPA3);
console.log(Status3.DABAOJIAN3);

const result3 = getServe3(Status3.SPA3);
const result32 = getServe3(1);

console.log(`我要去${result3}`);
console.log(`我要去${result32}`);

console.log(Status3[1]);

// 泛型
// 泛型: function
function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}
join("jacob", ".com");

function join2<T>(first: T, second: T) {
  return `${first}${second}`;
}
join2<string>("jacob", ".com");
join2<number>(1, 2);

// 1 T[]
function myFun<T>(params: T[]) {
  return params;
}
myFun<string>(["123", "456"]);

// 2 Array<T>
function myFun2<T>(params: Array<T>) {
  return params;
}
myFun2<string>(["123", "456"]);

// 多泛型
function join3<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join3<number, string>(1, "2");

// 類型推斷
join3(1, "2");

// 泛型: class
class SelectStudent{
  constructor(private students: string[] | number[]) {}
  getStudent(index: number): string | number {
    return this.students[index];
  }
}
const selectStudent = new SelectStudent(["A", "B", "C"]);
console.log(selectStudent.getStudent(1));

class SelectStudent2<T>{
  constructor(private students: T[]) {}
  getStudent(index: number): T {
    return this.students[index];
  }
}
const selectStudent2 = new SelectStudent2<string>(["A", "B", "C"]);
console.log(selectStudent2.getStudent(1));

// 泛型: 繼承
interface Student3 {
  name: string;
}

class SelectStudent3<T extends Student3> { // 泛型繼承接口
  constructor(private students: T[]) {}
  getStudent(index: number): string {
    return this.students[index].name;
  }
}

const selectStudent3 = new SelectStudent3([
  { name: "A" },
  { name: "B" },
  { name: "C" },
]);
console.log(selectStudent3.getStudent(1));

// 泛型約束
class SelectStudent4<T extends number | string> {
  constructor(private students: T[]) {}
  getStudent(index: number): T {
    return this.students[index];
  }
}

const selectStudent4 = new SelectStudent4<string>(["A", "B", "C"]);
console.log(selectStudent4.getStudent(1));

// 
class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}

class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}

// namespace
namespace Home {
  class Header2 {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }

  class Content2 {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Content";
      document.body.appendChild(elem);
    }
  }

  class Footer2 {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Footer";
      document.body.appendChild(elem);
    }
  }

  export class Page2{
    constructor() {
      new Header2();
      new Content2();
      new Footer2();
    }
  }
}

namespace Home3 {
  export class Page3{
    constructor() {
      new Components.Header();
      new Components.Content(); 
      new Components.Footer();
    }
  }
}

// 多文件編譯成一個文件
// tsconfig.json: "outFile": "./build/notes.js"













































