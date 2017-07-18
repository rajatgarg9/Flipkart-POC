const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon'),
    mainBowerFiles = require('main-bower-files'),
    plugins = require("gulp-load-plugins"),
    precompileHandlebars = require('gulp-precompile-handlebars'),
    wrap = require('gulp-wrap'),
    gulpDeclare = require('gulp-declare'),
    clean = require('gulp-clean');

var env,
    jsLibrariesSources,
    bootstrapFontFolder,
    jsCustomSources,
    templateSources,
    sassSources,
    cssLibraries,
    imgSources,
    outputDir,
    sassStyle,
    defaultTaskList;


env = process.env.NODE_ENV || 'development';

//env = 'production';



if (env === 'development') {
    outputDir = 'src';
    sassStyle = 'expanded';
    defaultTaskList = ['styles', 'templates', 'watch', 'start'];
} else {
    outputDir = 'dist';
    sassStyle = 'compressed';
    defaultTaskList = ['images','styles', 'jsCustom', 'jsLibraries', 'font', 'templates', 'watch', 'start'];
}


jsLibrariesSources = ['./bower_components/lodash/dist/lodash.js',
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './bower_components/handlebars/handlebars.js',
];

bootstrapFontFolder = ['./bower_components/bootstrap/dist/fonts/**/*'];

jsCustomSources = [ './src/assets/js/modules/product_details/global_function.js',
    './src/assets/js/modules/product_details/product.js'
];

templateSources = ['./src/assets/templates/components/footer/**/*.hbs',
    './src/assets/templates/components/header/**/*.hbs',
    './src/assets/templates/modules/product_details/**/*.hbs'
];


cssLibraries = ['./bower_components/bootstrap/dist/css/bootstrap.css'];


sassSources = ['./src/assets/css/product.scss'];

imgSources = ['./src/assets/images/**/*.*'];

gulp.task('clean', function () {
    return gulp.src(`./dist/assets/**/*`, { read: false }).on('error', gutil.log)
        .pipe(clean()).on('error', gutil.log);
});


gulp.task("jsCustom", function () {
    return gulp.src(jsCustomSources)
        .pipe(concat('product_details.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulpif(env === 'production', uglify())).on('error', gutil.log)
        .pipe(gulp.dest(`./dist/assets/js/modules/product_details`));
});

gulp.task("jsLibraries", function () {
    return gulp.src(jsLibrariesSources)
        .pipe(concat('jslib.js'))
        .pipe(gulpif(env === 'production', uglify())).on('error', gutil.log)
        .pipe(gulp.dest(`dist/assets/js/`));
});

gulp.task("templates", function () {
    return gulp.src(templateSources).on('error', gutil.log)
        .pipe(precompileHandlebars()).on('error', gutil.log)
        .pipe(wrap('Handlebars.template (<%= contents %>)')).on('error', gutil.log)
        .pipe(gulpDeclare({
            namespace: 'FlipkartProductpageMyApp.templates',
            noRedeclare: true,
        })).on('error', gutil.log)
        .pipe(concat('product_details_templates.js')).on('error', gutil.log)
        .pipe(gulpif(env === 'production', uglify())).on('error', gutil.log)
        .pipe(gulp.dest(`${outputDir}/assets/js/modules/product_details/`)).on('error', gutil.log);
});


gulp.task("styles", function () {
    gulp.src(sassSources)
        .pipe(gulpif(env === 'production', sourcemaps.init()))
        .pipe(sass({
            outputStyle: sassStyle
        }).on('error', gutil.log))
        .pipe(gulpif(env === 'production', sourcemaps.write('.')))
        .pipe(gulp.dest(`${outputDir}/assets/css`));
});

/* gulp.task('html', function () {
    gulp.src(htmlSources)
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(`${outputDir}`)))
}); */

gulp.task("images", function () {
    gulp.src(imgSources)
        .pipe(gulpif(env === 'production', imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        })))
        .pipe(gulpif(env === 'production', gulp.dest(`dist/assets/images/`)))
});

gulp.task("font", function () {
    gulp.src('./src/assets/fonts/**.*')
        .pipe(gulpif(env === 'production', gulp.dest('dist/assets/fonts')));
});


gulp.task("watch", function () {
    gulp.watch(['./src/assets/css/**/*'], ['styles']);
    gulp.watch(jsCustomSources, ['jsCustom']);
    gulp.watch(templateSources, ['templates']);
});

gulp.task('start', function () {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development2'
        }
    })
})

gulp.task("default", defaultTaskList);
