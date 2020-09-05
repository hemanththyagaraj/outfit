const IO = require('../utils/io')
const Firebase = require('../utils/firebase-storage')

exports.uploadFile = async (req, res) => {
    const { originalname, buffer } = req.file
    const [name, extension] = originalname.split('.')
    
    const io = new IO()
    const firebase = new Firebase()

    try {
        const filePath = `${__dirname}/../media/${name}.${extension}`
        await io.write(buffer, filePath)
        const url = await firebase.upload(filePath)
        io.delete(filePath)
        res.json({
            status: 'success',
            message: 'Uploaded successfully',
            data: { url }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}