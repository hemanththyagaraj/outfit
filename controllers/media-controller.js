
//route             POST  /api/v1/media
//desc              Create file locally, upload the file to firebase storage and delete local file                             
//access            Private
exports.uploadMedia = async (req, res) => {
        res.json({
            status: 'success',
            message: 'Uploaded successfully',
            data: { url: req.uploadUrl }
        })
}