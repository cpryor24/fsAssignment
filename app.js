let fs = require('fs');
let path = require('path');

fs.readFile('challenge1/info.txt', 'utf8', (err, data) => {
  if(err){
    throw err;
  }
  console.log(data)
});

fs.writeFileSync('challenge2/info.txt', 'Chris', {'flag': 'a'})

fs.rename('challenge3/binfo.txt', 'challenge3/info.txt', (err, data) => {
  if(err){
    throw err;
  }
  console.log('Renamed File')
})

fs.mkdir('challenge4/copyfolder', (err, data) => {
  if(err){
    throw err;
  }
  console.log('new folder');
  fs.copyFile('challenge4/info.txt', 'challenge4/copyfolder/info.txt', (err, data) => {
    if(err){
      throw err;
    }
    console.log('copied')
  })
})

fs.readFile('challenge5/info.txt', 'utf8', (err, data) => {
  if(err){
    throw err;
  }
  fs.writeFileSync('challenge5/info.txt', data.split('-').join(' '), (err, data) => {
    if(err){
      throw err;
    }
    console.log('change text')
  })
})

let myDir = path.join(__dirname, 'challenge6');

fs.readdir(myDir, (err, files) => {
  if (err) {
    console.error(err)
  }
  files.forEach( (err, file) => {
    if(files[file].includes('txt') ){
      console.log(files[file])
    }
  })
})
