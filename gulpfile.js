var gulp = require('gulp');
var gzip = require('gulp-gzip');

var imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg'); 

gulp.task('compressImage', function() {
    return gulp.src(['./src/assets/images/*'])
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 10
            })
        ]))
        .pipe(gulp.dest('./dist/linkedinlocalDakar/assets/images'));
});
// gulp.task('compress', function(done) {
//   gulp.src(['./dist/**/*.*'])
//       .pipe(gzip())
//       .pipe(gulp.dest('./dist'));
//       done();
// });
// gulp.task('compressImage', function(done) {
//     gulp.src(['./src/assets/images/*'])
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dist/assets/images'));
//         done();
//   });