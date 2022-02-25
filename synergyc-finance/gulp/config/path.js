// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // папка с результатом сборки
const srcFolder = `./src`; // папка с исходниками

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/img/`,
    fonts: `${buildFolder}/fonts/`,
    assets: `${buildFolder}/assets/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.{sass,scss}`,
    html: `${srcFolder}/*.{html,pug}`,
    assets: `${srcFolder}/assets/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
    scss: `${srcFolder}/**/*.{sass,scss}`,
    html: `${srcFolder}/**/*.{html,pug}`,
    assets: `${srcFolder}/assets/**/*.*`,
  },
  clean: buildFolder, // папка, в котором будет очиска результата
  buildFolder: buildFolder, // папка с результатом
  srcFolder: srcFolder, // папка с исходниками
  rootFolder: rootFolder, // название текущей папки проекта
  ftp: ``,
};