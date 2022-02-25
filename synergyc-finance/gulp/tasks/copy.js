// Перенос (копирование) файлов из папки с исходниками в папку с результатом

export const copy = () => {
  return app.gulp
    .src(app.path.src.assets)
    .pipe(app.gulp.dest(app.path.build.assets));
};



// src() -- получает доступ к файлам и папкам по указанному пути
// dest() -- переносим файлы/папки по указанному пути
