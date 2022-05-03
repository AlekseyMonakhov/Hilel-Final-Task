const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task("css", () => {
    return gulp
        .src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'));   
});
gulp.task("html", () => {
    return gulp
        .src('./src/index.html')
        .pipe(gulp.dest('dist'));   
});
gulp.task("images", () => {
    return gulp
        .src('./src/images/*')
        .pipe(gulp.dest('dist/images'));   
});
gulp.task("js", () => {
    return gulp
        .src('./src/js/index.js')
        .pipe(gulp.dest('dist/js'));   
});
gulp.watch("./src/scss/*.scss", gulp.task("css"));
gulp.watch("./src/index.html", gulp.task("html"));
gulp.watch("./src/images/*", gulp.task("images"));
gulp.watch("./src/js/index.js", gulp.task("js"));
gulp.task("start", gulp.series("images", "css", "html", "js"));