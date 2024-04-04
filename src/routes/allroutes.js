import { Router } from "express";
import { addStudent, findStudent } from "../controllers/student.controller.js";
import { addRequest, findRequest } from "../controllers/request.controller.js";

export const router = Router()

router.post('/add-student', addStudent)
router.get('/find-student', findStudent)

router.post('/add-request', addRequest)
router.get('/find-request', findRequest)