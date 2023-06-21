const chokidar = require('chokidar');
const git = require('simple-git')({
    baseDir: 'C:\\GoEntity',
});

const watcher = chokidar.watch('C:\\GoEntity', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher
  .on('change', (path) => {
    console.log('File', path, 'has been changed');
    git()
      .add('./*')
      .commit("auto commit (::file changed)")
      .push('origin', 'main', () => console.log('push successful'))
      .catch((err) => console.error('error: ', err));
  })
  .on('add', (path) => {
    console.log('File', path, 'has been added');
    git()
      .add('./*')
      .commit("auto commit (::file added)")
      .push('origin', 'main', () => console.log('push successful'))
      .catch((err) => console.error('error: ', err));
  });
