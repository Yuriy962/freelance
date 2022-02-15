// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаём значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js"; // копирование
import { reset } from "./gulp/tasks/reset.js" // удаление папки с результатом
import { html } from "./gulp/tasks/html.js" // работа html
import { server } from "./gulp/tasks/server.js"; // запуск сервера
import { scss } from "./gulp/tasks/scss.js"; // работа css
import { js } from "./gulp/tasks/js.js"; // работа js
import { images } from "./gulp/tasks/images.js"; // работа images

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.assets, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images); // одновременное выполнение задач

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); // эта функция выполняет задачи последовательно

// Выполнение сценария по умолчанию
gulp.task('default', dev);