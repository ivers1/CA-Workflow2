const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();

function imgMini(){
    return gulp
    .src("./img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./minified/images"));
}

gulp.task("browserSync", function(){
    browserSync.init({
        server: {
            baseDir: "ca-workflow2"
        },
    })
})

gulp.task("imgMini", imgMini);

gulp.task("watch", () => {
    gulp.watch("./img/*", imgMini, browserSync);
});

gulp.task("default", gulp.series("imgMini", "browserSync", "watch")

);