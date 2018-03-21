module.exports = (app) => {
    app.use('/order', require('./order.route'));
    app.use('/files', require('./file.route'))
};