const multer = require('multer');
const path = require('path');

const tmpDir = path.join(__dirname, '../', 'tmp');

const storage = multer.diskStorage({
    destination: tmpDir,
    filename: (req, file, cd) => {
        cd(null, file.originalname)
    },
    limits: {
        fileSize: 1048576
    }
});

const upload = multer({
    storage: storage
});

module.exports = upload;