import { Router } from "express";
import { addUser, getAllUser, getSpecificUser } from "../controllers/users.controller.js";
import { addRequest, findRequest, getSpecificRequest } from "../controllers/request.controller.js";


export const router = Router()

router.post('/add-user', addUser)
router.get('/find-user', getAllUser)
router.get('/find-user:id', getSpecificUser)

router.post('/add-request', addRequest)
router.post('/add-request', findRequest)
router.get('/find-request:id', getSpecificRequest)






