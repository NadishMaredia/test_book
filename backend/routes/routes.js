const express = require('express');
const route = express.Router();
const userController=require('../controllers/userControllers')
<<<<<<< HEAD
const adminController= require('../controllers/adminController')
=======
const bookController=require('../controllers/bookControllers')
>>>>>>> 60f63c88554e3167d6f483d75ef15a9b4dcfee6f

route.post('/signup', userController.signup)
route.post('/login', userController.login)
route.post('/changePassword/:email', userController.changePassword);
route.post('/changeProfile/:email', userController.changeProfile);
route.put('/forgotpassword', userController.forgotpassword)
<<<<<<< HEAD
route.post('/addbook', adminController.create)
route.get('/books', adminController.find)
route.put('/books/:id',adminController.find)
route.put('/book/:id',adminController.update)
route.delete('/book/:id',adminController.delete)

=======
route.get('/users/:email', userController.getUser);
route.post('/users/addToCart', userController.addToCart);
route.get('/books/:searchText', bookController.displayBookList);
route.get('/books/book/:id', bookController.getParticularBook);
>>>>>>> 60f63c88554e3167d6f483d75ef15a9b4dcfee6f

module.exports = route
