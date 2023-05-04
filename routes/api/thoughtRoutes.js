const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThoughts);

router.route("/:id").get(getThoughtById);

router.route('/').get(getAllThoughts).post(createThought);

router.route("/:id").get(getThoughtById).put(updateThought);

router.route("/:id").get(getThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions/reactionId').get(getThoughtById).post(createReaction);

router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);

module.exports = router;