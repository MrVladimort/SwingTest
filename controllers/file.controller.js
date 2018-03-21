const fileService = require('../services/file.service');
const path = require('path');

module.exports.getPriceFile = async (req, res, next) => {
    const pricePath = path.join(process.cwd(), 'files', 'Prices.pdf');
    const {stat, stream} = fileService.getFile(pricePath);

    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    stream.pipe(res);
};
