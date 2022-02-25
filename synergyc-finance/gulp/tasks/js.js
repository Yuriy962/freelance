import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true }) // sourcemaps: true - включение возможности создания карты исходников
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "JS",
            message: "Error: <% error.message %>",
          })
        )
      )
      .pipe(webpack({
          mode: 'development',
          output: {
              filename: 'app.min.js',
          }
      }))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream());
}

// sourcemaps: true; - это нужно для понимания в каком файле появляется ошибка