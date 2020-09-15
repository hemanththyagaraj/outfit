const validateSuccessfullUpload = (req, res, next) => {
    if (!req.uploadUrl) {
        return res.status(400).json({
            status: 'fail',
            message: 'Please upload a valid file'
        })
    } else {
        next()
    }
}

module.exports = validateSuccessfullUpload