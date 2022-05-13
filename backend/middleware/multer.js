const multer = require('multer')
const { v4: uuidv4 } = require('uuid'); //to generate secure id
 const path = require("path");

const uniqueId = uuidv4()


// setting file destination for storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../backend/uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, uniqueId  + file.originalname);
    },
});

var upload = multer({storage: storage})

module.exports = upload