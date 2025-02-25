import { Router } from "express";
import { addFriend, createUser, deleteFriend, deleteUserById, getAllUsers, getUserById, updateUserById } from "../../controllers/userControllers.js";

const router = Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:idUser')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

router.route('/:idUser/friends/:idFriend')
    .post(addFriend)
    .delete(deleteFriend)
    

export { router as userRouter }
