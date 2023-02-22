const fs = require('fs')
const through = require('through2')
const { series, parrallel } = require('gulp')

function callbackTask(done) {
    setTimeout(() => {
        console.log('callbackTask')
        done()
    }, 1000)
}

function promiseTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('promiseTask')
            resolve()
        }, 1000)
    })
}

async function asyncTask() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('asyncTask')
            resolve()
        }, 1000)
    })
}

function streamTask() {
    return fs.createReadStream('input.txt')
    .pipe(through((chunk, enc, next) => {
        setTimeout(() => {
            next(null, chunk.toString() + '，hello')
        }, 1000)
    }))
    .pipe(fs.createWriteStream('output.txt'))
}

exports.callback = callbackTask

exports.promise = promiseTask

exports.async = asyncTask

exports.stream = streamTask

const parrllelTask = parrallel(callbackTask, promiseTask, asyncTask, streamTask)
const seriesTask = series(callbackTask, promiseTask, asyncTask, streamTask)

exports.parrllel = parrllelTask
exports.series = seriesTask