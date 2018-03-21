const fs = require('fs');

module.exports.getFile = (path) => {
    const stream = fs.createReadStream(path);
    const stat = fs.statSync(path);
    return {stream, stat}
};