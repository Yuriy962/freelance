import dartSass from 'sass'; // препроцессор sass
import gulpSass from 'gulp-sass'; // плагин для запуска sass
import rename from 'gulp-rename'; // Переименование файлов
import cleanCss from 'gulp-clean-css'; // Сжатие css-файла
// import webpcss from "gulp-webpcss"; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа-запросов

const sass = gulpSass(dartSass);

export const scss = () => {
    return (
      app.gulp
        .src(app.path.src.scss, { sourcemaps: true }) // собираем один файл стилей из множества файлов стилей
        .pipe(
          app.plugins.plumber(
            app.plugins.notify.onError({
              title: "SCSS",
              message: "Error: <%= error.message %>",
            })
          )
        )
        .pipe(app.plugins.replace(/@img\//g, "../assets/img/"))
        .pipe(
          sass({
            outputStyle: "expanded",
          })
        )
        .pipe(groupCssMediaQueries())
        // .pipe(
        //   webpcss({
        //     webpClass: ".webp", // класс, если браузер поддерживает изображение
        //     noWebpClass: ".no-webp", // если не поддерживает
        //   })
        // )
        .pipe(
          autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
          })
        )
        // Раскомментировать строку ниже если нужен не сжатый дубль файла стилей
        // .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss()) // сжатие файла стилей
        .pipe(
          rename({
            // переименовывание файла стилей
            extname: ".min.css",
          })
        )
        // Закомментировать строку ниже если нужен не сжатый дубль файла стилей
        .pipe(app.gulp.dest(app.path.build.css)) // выгружаем в папку с результатом
        .pipe(app.plugins.browsersync.stream())
    ); // обновляем браузер
}