const path = require('path');

module.exports = {
register : res.sendFile(path.join(__dirname, '..views/register.html'))
}
