const { src, dest, series, parallel, watch } = require('gulp')
const gulpClean = require('gulp-clean')
const gulpSass = require('gulp-sass')(require('sass'))
const gulpBabel = require('gulp-babel')
const gulpEjs = require('gulp-ejs')
const browserSyncServer = require('browser-sync').create()

function clean() {
    return src("dist/**", { read: 'false' })
            .pipe(gulpClean())
}

function styles() {
    return src('src/styles/**/*.scss', { base: 'src' })
            .pipe(gulpSass())
            .pipe(dest('dist'))
}

function scripts() {
    return src('src/scripts/**/*.js', { base: 'src' })
            .pipe(gulpBabel({
                presets: ["@babel/preset-env"]
            }))
            .pipe(dest('dist'))
}

function htmls() {
    return src('src/**/*.html', { base: 'src' })
            .pipe(gulpEjs({ 'title': 'gulp' }))
            .pipe(dest('dist'))
}

async function images() {
    const gulpImagemin = await import('gulp-imagemin')
    return src('src/images/**/*.@(jpg|png|gif|svg)', { base: 'src' })
            .pipe(gulpImagemin.default())
            .pipe(dest('dist'))
}

function static() {
    return src('static/**', { base: 'static' })
            .pipe(dest('dist'))
}

function browserSyncServerReload() {
    browserSyncServer.reload();
    done();
}

function serve() {
    watch('src/styles/**/*.scss', series(styles, browserSyncServerReload))
    watch('src/scripts/**/*.js', series(scripts, browserSyncServerReload))
    watch('src/**/*.html', series(htmls, browserSyncServerReload))
    return browserSyncServer.init({
        notify: false,
        server: {
            baseDir: ['dist', "src", "static"],
            routes: {
                '/node_modules': 'node_modules' // https://www.bilibili.com/video/BV1z34y1X77Z/?p=3&spm_id_from=pageDriver&vd_source=107a06106139dffa25f7410734204320
            },
        }
    })
}

const build = series(clean, parallel(styles, scripts, htmls, images, static))
const dev = series(build, serve)

exports.build = build
exports.dev = dev