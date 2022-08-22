import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { reset } from './gulp/tasks/reset.js'
import { plugins } from './gulp/config/plugins.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js'
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';


//передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//наблюдатель
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle),
    mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images)),
    dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)),
    build = gulp.series(reset, mainTasks),
    deployZIP = gulp.series(reset, mainTasks, zip),
    deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev }
export { build }
export { deployZIP }
export { deployFTP }

//выполнение сценария по умолчанию
gulp.task('default', dev);