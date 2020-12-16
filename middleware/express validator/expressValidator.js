const {check} = require("express-validator");

module.exports.registerUserValidator =     [
    check('name', 'Name esta vacio').not().isEmpty(),
    check('lastName', 'Last Name esta vacio').not().isEmpty(),
    check('userName', 'Userame esta vacio').not().isEmpty(),
    check('email', 'Email esta vacio').isEmail(),
    check('password', 'Password necesita minimo 6 letras').isLength({ min: 6}),
];

module.exports.loginUserValidator =[
    check('email', 'Email esta vacio').isEmail(),
    check('password', 'Password necesita minimo 6 letras').isLength({ min: 6}),
]; 

module.exports.searchUserByUsernameValidator = [
    check('userNameFromSearch', "Search esta vacio").not().isEmpty()
];

module.exports.changeUserDataValidator = [
    check('changeUserData', "Input esta vacio").not().isEmpty()
];

module.exports.checkActualPasswordValidator = [
    check('passwordToCheck', "Password debe tener minimo 6 letras").isLength({min: 6})
];

module.exports.changeUserPasswordValidator = [
    check('newPassword', "Password debe contener al menos 6 letras").isLength({ min: 6})
];


module.exports.createPostValidator = [
    check("textOfThePost", "Necesitas escribir algo para postear").not().isEmpty()
];

module.exports.searchForPostValidator =[
    check("searchInput", "Search esta vacio").not().isEmpty()
];

module.exports.addCommentValidator = [
    check("textOfTheComment", "Texto vacio").not().isEmpty()
];

