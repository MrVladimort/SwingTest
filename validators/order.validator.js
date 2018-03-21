const  { body } = require('express-validator/check');

module.exports.validateCreateOrder = [];

// module.exports.validateChangeEmail = [
//     body('id').isInt().exists(),
//     body('email').isEmail().exists(),
// ];
//
// module.exports.validateUpdatePhone = [
//     body('id').isInt().exists(),
//     body('code').matches(/\d{4}/).exists(),
//     body('phone').matches(/\+\d{12,18}/).exists(),
// ];
//
// module.exports.resetPassword = [
//     body('email').isEmail().exists(),
// ];
//
// module.exports.changePassword = [
//     body('password','password does not match regex')
//         .matches(XRegExp('^(?!.*([\\p{Lu}\\p{Ll}0-9])\\1{2})(?=.*[a-z])(?=.*\\d)[\\p{Lu}\\p{Ll}0-9]{8,20}$')),
//     body('passwordConfirm', 'passwordConfirm field must have the same value as the password field')
//         .exists()
//         .custom((value, { req }) => value === req.body.password),
//     body('token').exists(),
// ];
