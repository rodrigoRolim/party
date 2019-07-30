import express from 'express'
import { Test } from './../models'
import Controller from './../controllers/controller'
const router = express.Router()
const controller = new Controller(Test)
router.post('/test', (req, res) => controller.function(req, res))

export default router
