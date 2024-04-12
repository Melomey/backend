import { Router } from "express";
import { addUser, getAllUsers, getSpecificUser, loginUser, logoutUser } from "../controllers/users.controller.js";
import { addRequest, findRequests, getSpecificRequest, } from "../controllers/request.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";


export const router = Router()

//users
router.post('/user', addUser)
router.post('/login', loginUser)
router.post('/logout', authenticateToken, logoutUser);

router.get('/user', authenticateToken, getAllUsers)
router.get('/user/:id', authenticateToken, getSpecificUser)

//requests
router.post('/request', authenticateToken, addRequest)

router.get('/request', authenticateToken, findRequests)
router.get('/request/:id', authenticateToken, getSpecificRequest)



