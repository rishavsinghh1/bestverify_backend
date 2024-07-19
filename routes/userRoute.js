const express = require('express');


const { getAllUser, addNewUser, getUserById, deleteUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getAllUser)
//router.route('/:id').get(getUserById).delete(deleteUser).patch(updateUser)

router.route('/getuserData').post(getUserById);
router.route('/delete-user').post(deleteUser);
router.route('/update-user').post(updateUser);





module.exports = router;