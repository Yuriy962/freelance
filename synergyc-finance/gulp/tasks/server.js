export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` // Базовая папка, откуда нам надо запустить файлы. Она же папка с результатом проекта
        },
        notify: false, // убираем сообщения в браузере (чтобы не мешали)
        port: 3000, // порт для нашего лок.сервера
    });
}