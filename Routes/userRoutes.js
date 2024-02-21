const express = require('express');
const userController = require('../Controllers/userController');
const userRouter  = express.Router();

userRouter.post('/profile-setup',userController.profileSetup);
userRouter.post('/login',userController.login);




module.exports  =userRouter;