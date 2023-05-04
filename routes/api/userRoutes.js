const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require("../../controllers/userController.js");

router.route("/").get(getAllUsers);

router.route('/:Id').get(getUserById);

router.route("/").get(getAllUsers).post(createUser);

router.route('/:Id').get(getUserById).put(updateUser);

router.route('/:Id').get(getUserById).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;