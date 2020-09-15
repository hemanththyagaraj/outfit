const IO = require('../utils/io')
const Firebase = require('../utils/firebase-storage')

const uploadFile = async (req, res, next) => {
    if ('file' in req === false) return next()

    try {
        const { originalname, buffer } = req.file
        const [name, extension] = originalname.split('.')
        
        const io = new IO()
        const firebase = new Firebase()

        const filePath = `${__dirname}/../media/${name}.${extension}`
        await io.write(buffer, filePath)
        const url = await firebase.upload(filePath)
        io.delete(filePath)
        req.uploadUrl = url
        next()
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Failed to upload the file'
        })
    }
}

module.exports = uploadFile