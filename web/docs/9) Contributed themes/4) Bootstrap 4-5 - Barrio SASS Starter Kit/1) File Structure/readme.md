---
url: >-
  https://www.drupal.org/docs/8/themes/bootstrap-4-sass-barrio-starter-kit/file-structure
description: >-
  Folders - assets: initially empty, put your own asset files as required for
  your project. - config: default Bootstrap Barrio Subtheme files. - css:
  generated css files. Initial files included only to avoid errors before gulp
  is executed. Will be replaced upon gulp execution - images: subtheme images -
  js: required javascript files copied on gulp process. - scss: complete rewrite
  of Bootstrap Barrio css files on scss format including bootstrap variables -
  templates: custom template overrides. Initially empty.
published_time: '2018-02-17T03:10:47+00:00'
modified_time: '2020-04-18T13:36:34+00:00'
---
#### Folders

* \- assets: initially empty, put your **own** asset files as required for your project.
* \- config: default Bootstrap Barrio Subtheme files.
* \- css: generated css files. Initial files included only to avoid errors before gulp is executed. Will be replaced upon gulp execution
* \- images: subtheme images
* \- js: required javascript files copied on gulp process.
* \- scss: complete rewrite of Bootstrap Barrio css files on scss format including bootstrap variables
* \- templates: custom template overrides. Initially empty.

#### gulpfile.js contains gulp configuration:

```php
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/style.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(sass({ outputStyle: 'compressed' }))
        // .pipe(minifyCss())
        .pipe(browserSync.stream());
});

// Move the javascript files into our js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'], ['sass']);
    //    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);
```