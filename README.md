###安装
npm install gulp-copy-ext

###使用文档

gulfile.js 编写示例
```js
var gulp = require('gulp');
var copyext = require('gulp-copy-ext');
var src = './src';
var desc = './build';

gulp.task('mcss', ['kmc'], function() {
   gulp.src(src+'/**/*.css')
        .pipe(copyext({
          ext: '-debug' //在后缀前加上自定义别名
        }))
        .pipe(gulp.dest(dest));
});

```


