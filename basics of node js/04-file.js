//reading a file//
const fs = require('fs')

fs.readFile('./docs/hello.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

//writing to a file//
fs.writeFile('./docs/hello1.txt', 'hello world', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('file has been updated successfully')
})


//directories//
if (!fs.existsSync('./newfolder')) {
    fs.mkdir('./newfolder', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder has been created succesfully')
    })
}
else {
    fs.rmdir('./newfolder', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted successfully')
    })
}
//deleting a file//

if (fs.existsSync('./docs/hello1.txt')) {
    fs.unlink('./docs/hello1.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted successfully')
    })
}
