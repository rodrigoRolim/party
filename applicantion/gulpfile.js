const { src, dest, watch, series, task } = require('gulp')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const clean  = require('gulp-clean')
// const uglify = require('gulp-uglify')
// const rename = require('gulp-rename')

task('clean', function () {

  return src('dist', { allowEmpty: true })
    .pipe(plumber())
    .pipe(clean())
}) 

task('build', function () {
  
  return src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(dest('dist'))
})

task('static', function () {
  return src('src/**/*.json')
    .pipe(plumber())
    .pipe(dest('dist'))
})
exports.default = function() {

 watch('src/**/*.js', { ignoreInitial: false }, series(task('clean'), task('static'), task('build')))
}