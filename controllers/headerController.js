const path = require('path');

module.exports = {
header: (req,res) => {
    res.sendFile(path.join(__dirname, '..views/header.html'))
}
}