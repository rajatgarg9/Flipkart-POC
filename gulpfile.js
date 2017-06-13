const gulp=require('gulp'),
    sass=require('gulp-sass'),
    gutil=require('gulp-util'),
    gulpif=require('gulp-if'),
    uglify=require('gulp-uglify')
    concat=require('gulp-concat');
    browserify=require('gulp-browserify'),
    minifyHTML=require('gulp-minify-html'),
    imagemin=require('gulp-imagemin'),
    pngcrush=require('imagemin-pngcrush'),
    babel=require('gulp-babel'),
    nodemon=require('gulp-nodemon');

    var env,
        jsSources,
        sassSoures,
        htmlSourses,
        imgSources,
        outputDir,
        sassStyle;


    env = process.env.Node_ENV || 'development';
    env = 'production';

    if(env ==='development'){
        outputDir='builds/development/';
        sassStyle='expanded';
    } else {
        outputDir='builds/production/';
        sassStyle='compressed';
    }

    jsSources=['./components/scripts/libs/jquery-3.2.0.js',
                   './components/scripts/libs/handlebars-v4.0.5.js',
                   './components/scripts/libs/bootstrap.min.js',
                   './components/scripts/libs/lodash.js',
                   './components/scripts/global_function.js',
                   './components/scripts/json_api.js',
                   './components/scripts/header_footer.js',
                    './components/scripts/product.js'
             ];
    sassSources=['./components/sass/product.scss'];
    htmlSources=['builds/development/*.html'];
    imgSources=['builds/development/images/**/*.*'];

gulp.task("styles",function(){
    gulp.src(sassSources)
     .pipe(sass({outputStyle:sassStyle}).on('error',gutil.log))
     .pipe(gulp.dest(`${outputDir}css`));
});

gulp.task("js",function(){
    gulp.src(jsSources)
     .pipe(concat('product.js'))
     .pipe(babel({
         presets:['es2015']
     }))
     .pipe(gulpif(env==='production',uglify())).on('error',gutil.log)
     .on('error',gutil.log)
     .pipe(gulp.dest(`${outputDir}js`));
});

gulp.task('html',function(){
    gulp.src(htmlSources)
    .pipe(gulpif(env === 'production',minifyHTML()))
    .pipe(gulpif(env === 'production',gulp.dest(`${outputDir}`)))
});

gulp.task("images",function(){
    gulp.src(imgSources)
    .pipe(gulpif(env === 'production',imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use:[pngcrush()]
    })))
    .pipe(gulpif(env === 'production',gulp.dest(`${outputDir}images`)))
});

gulp.task("watch",function(){
    gulp.watch(['components/sass/*.scss','components/sass/module/product/*.scss','components/sass/module/*.scss'],['styles']);
    gulp.watch(jsSources,['js']);
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task("default",['styles','js','html','images','watch','start']);