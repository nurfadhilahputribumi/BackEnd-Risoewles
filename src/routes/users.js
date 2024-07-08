const express = require('express');

const UserController = require ('../controller/users.js')

const router = express.Router();

// //CREATE - POST
router.post('/', UserController.createNewPengamatan);

//READ - GET
router.get('/', UserController.getAllpengamatan);

// //UPDATE - PATCH
// router.patch('/:id', UserController.updatepengamatan);

// //DELETE - DELETE
// router.delete('/:id', UserController.deleteUser);

module.exports = router;
