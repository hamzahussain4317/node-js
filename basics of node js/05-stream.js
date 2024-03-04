//streams//
const fs = require('fs')
const readastream = fs.createReadStream('./docs/blog1.txt')
const writetoastream = fs.createWriteStream('./docs/blog2.txt')
// readastream.on('data', (chunk) => {
//     console.log('|---NEW CHUNK---|')
//     console.log(chunk.toString())
//     writetoastream.write('|---NEW CHUNK---|')
//     writetoastream.write(chunk)
// })
readastream.pipe(writetoastream)
