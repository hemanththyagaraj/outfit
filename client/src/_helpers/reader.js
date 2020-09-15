class Reader {

    constructor(file) {
        this.file = file
    }

    convertToDataUrl () {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(this.file)

            reader.addEventListener('load', (event) => {
                const  { result } = event.target
                return resolve(result)
            })

            reader.addEventListener('error', () => {
                return reject('Failed to load the file')
            })
        })
    }

}

export default Reader