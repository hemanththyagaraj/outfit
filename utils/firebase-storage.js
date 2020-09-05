const { Storage } = require('@google-cloud/storage')

class Firebase {
    constructor() {
        this.storage = new Storage({
            keyFilename: `${__dirname}/outfit-7e104-firebase-adminsdk-xpbv8-0ed6e0d714.json`
        })
        this.bucketName = 'gs://outfit-7e104.appspot.com/'
    }

    upload (file) {
        return new Promise(async(resolve, reject) => {
            const { storage, bucketName } = this
            try {
                const response = await storage.bucket(bucketName).upload(file)
                const [files, media] = response
                resolve(media.mediaLink)
            } catch (error) {
                reject('Failed to upload your file')
            }
        })
    }
}

module.exports = Firebase