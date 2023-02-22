"use strict";
function fn(a) {
    return a;
}
fn(10);
fn('hello');
function fn2(a, b) {
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
fn3('hello');
fn3({ length: 10 });
class myClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new myClass('孫悟空');
