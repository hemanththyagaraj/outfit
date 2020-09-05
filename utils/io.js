const fs = require('fs')
class IO {

    write(file, path) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, file, 'utf-8', (err) => {
                if (err) reject(err)
                else resolve('Succefully written')
            })
        })
    }

    delete(path) {
        fs.unlink(path, (err) => {
            if (err) console.log('Error in deleting file frm server')
        })
    }

}

module.exports = IO