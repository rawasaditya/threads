import express, {Router} from "express";
import { getUsers, createUser } from "../controllers/userController";

const router: Router = express.Router();

// GET all users
router.get("/", getUsers);

// POST create a new user
router.post("/", createUser);

export default router;
