const degit = require('degit');

(() => {
  console.log(process.argv);
  // [
  //   '/Users/tetsuo.yamamoto/.nodebrew/node/v16.14.2/bin/node',
  //   '/Users/tetsuo.yamamoto/temp2/degit-test/index.js',
  // ----------↓ここから引数
  //   'hoge',
  //   '--path=hoge'
  // ]

  const repo = process.argv[2];
  const path = process.argv[3] ?? './';
  
  const emitter = degit(repo, {
    cache: true,
    force: true,
    verbose: true,
  });

  emitter.on('info', info => {
    console.log(info.message);
  });

  emitter.clone(path).then(() => {
    console.log('done');
  });
})();
