const express = require("express");
const router = express.Router();
const {validationResult, check} = require("express-validator");
let User = require('../schemas/User');
const bcryptjs = require("bcryptjs");
const gravatar = require("gravatar");
const config =  require('config');
const jwt = require("jsonwebtoken");
const authentication = require('../middleware/authentication');
const getUserbyMiddleware = require('../functions/userFunctions/getUserByMiddleware');
const getUserByMiddleware = require("../functions/userFunctions/getUserByMiddleware");
const getUserByEmail = require("../functions/userFunctions/getUserByEmail");
const getUsers = require("../functions/userFunctions/getUsers");
const getUserById = require("../functions/userFunctions/getUserById");
const registerUser = require("../functions/userFunctions/registerUser");
const loginUser = require("../functions/userFunctions/loginUser");
const searchUserByUsername = require("../functions/userFunctions/searchUserByUsername");
const changeUserData = require("../functions/userFunctions/changeUserData");
const checkActualPassword = require("../functions/userFunctions/checkActualPassword");
const changeUserPassword = require("../functions/userFunctions/changeUserPassword");




const{ registerUserValidator,
        loginUserValidator, 
        searchUserByUsernameValidator,
        changeUserDataValidator,
        checkActualPasswordValidator,
        changeUserPasswordValidator
    } = require("../middleware/express validator/expressValidator");



// autenticar token
router.get("/", authentication, getUserByMiddleware);

// encontrar user por email
router.get('/get_user_by_email/:user_email', getUserByEmail );

// obtiene todos los users de la BD
router.get('/users', getUsers);

// encontrar user por id
router.get('/get_user_by_id/:user_id', getUserById);

// Registro
router.post('/register', registerUserValidator, registerUser);

// Login
router.post('/login', loginUserValidator, loginUser);

// encontrar user con username
router.put('/search_by_username', searchUserByUsernameValidator, searchUserByUsername);

// cambiar datos del user
router.put('/change_user_data/:user_data_to_change', authentication, changeUserDataValidator, changeUserData);

// checkear password actual
router.put('/check_actual_password', authentication,checkActualPasswordValidator, checkActualPassword);

// cambiar password
router.put('/change_user_password', authentication, changeUserPasswordValidator, changeUserPassword);

module.exports = router;        