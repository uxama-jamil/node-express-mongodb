import express from "express"
import { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } from "../controller/bootcamp.js"
const router = express.Router()

router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)


export default router