const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    getFriendById,
    deleteFriend
} = require("../../controllers/userController.js");

router.route("/").get(getAllUser);

router.route('/:Id').get(getUserById);

router.route("/").get(getAllUser).post(createUser);

router.route('/:Id').get(getUserById).put(updateUser);

router.route('/:Id').get(getUserById).get(getThoughtById).delete(deleteUser).delete(deleteThought);

router.route('/:userId/friends/:friendId').get(getFriendById).post(addFriend);

router.route('/:userId/friends/:friendId').get(getFriendById).delete(deleteFriend);

module.exports = router;