const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

function imgMini(){
    return gulp
    .src("./img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./minified/images"));
}

gulp.task("imgMini", imgMini);

gulp.task("watch", () => {
    gulp.watch("./img/*", imgMini);
});

gulp.task("default", gulp.series("imgMini", "watch")

);