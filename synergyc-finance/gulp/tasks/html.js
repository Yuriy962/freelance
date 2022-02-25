import fileInclude from "gulp-file-include";
// import webpHtmlNosvg from "gulp-webp-html-nosvg"; // Обработка картинок, отличных от svg
import versionNumber from "gulp-version-number"; 
// import pug from 'gulp-pug'; // html-препроцессор pug

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error <%= error.message %>"
        }))
    )
    .pipe(fileInclude()) // заставляем работать все @@include
    // .pipe(pug({
    //     // Сжатие файла
    //     pretty: true,
    //     // Показывать в терминале какой файл обработан
    //     verbose: true
    // }))
    .pipe(app.plugins.replace(/@img\//g, './assets/img/'))
    // .pipe(webpHtmlNosvg())
    // .pipe(
    //     versionNumber({
    //         'value': '%DT%', // добавляем к адресу файлов css/js текущие дату и время
    //         'append' : {
    //             'key': '_v',
    //             'cover': 0,
    //             'to' : [
    //                 'css',
    //                 'js',
    //             ]
    //         },
    //         'output': {
    //             'file': 'gulp/version.json' // будет создаваться файл version
    //         }
    //     })
    // )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream()); // обновление
};
