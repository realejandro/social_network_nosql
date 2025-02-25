import { Router } from "express";
import { userRouter } from "./userRoutes.js";
import { thoughtRouter } from "./thoughtsRoutes.js";
const router = Router();
router.use('/users', userRouter);
router.use('/thoughts', thoughtRouter);
export default router;
