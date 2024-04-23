import { Router } from "express";
import { addUser, getAllUsers, getSpecificUser, loginUser, logoutUser, updateUser } from "../controllers/users.controller.js";

import { addRequest, findRequests,findUserRequests, getSpecificRequest, } from "../controllers/request.controller.js";

import { authenticateToken } from "../middlewares/auth.middleware.js";


export const router = Router()

//users
router.post('/users', addUser);
router.post('/login', loginUser);
router.post('/logout', authenticateToken, logoutUser);

router.get('/users', authenticateToken, getAllUsers);
router.patch('/user', authenticateToken, updateUser);
router.get('/users/:id', authenticateToken, getSpecificUser);

//requests
router.post('/requests', authenticateToken, addRequest);


router.get('/requests/:fullName', findRequests);
router.get('/partner-requests',  findRequests);
router.get('/requests', authenticateToken, findUserRequests);
router.get('/requests/:id', authenticateToken, getSpecificRequest);



