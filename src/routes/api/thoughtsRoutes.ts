import { Router } from "express";
import { createReaction, createThought, deleteReaction, getAllThoughts, getThoughtById } from "../../controllers/thoughtControllers.js";

const router = Router();

router.route('/')
    .get(getAllThoughts)
    .post(createThought);

router.route('/:idThought')
    .get(getThoughtById);

router.route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

//router.route('/:thoughtId/reactions/:reactionId')
    


export { router as thoughtRouter }