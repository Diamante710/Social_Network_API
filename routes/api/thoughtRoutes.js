const router = require('express').Router();
const {
    getAllthought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    getReactionById,
    deleteReacton
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllthought);

router.route("/:id").get(getThoughtById);

router.route('/').get(getAllthought).post(createThought);

router.route("/:id").get(getThoughtById).put(updateThought);

router.route("/:id").get(getThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions/reactionId').get(getThoughtById).post(createReaction);

router.route('/:thoughtId/reactions/reactionId').get(getReactionById).delete(deleteReaction);

module.exports = router;