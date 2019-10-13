const multer = require('multer')

const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', './assets/uploads'),
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)
            // correção de bug no frontend com regex para apagar espaços em branco
            callback(null, `${name.replace(/\s/gi, '')}-${Date.now()}${ext}`)
        }
    })
}
