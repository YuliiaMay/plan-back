const express = require('express');
const {authenticate, validateBody} = require('../../middlewares');
const ctrl = require('../../controllers/tasks');
const { taskSchemas } = require('../../models');

const router = express.Router();

router.get('/', authenticate, ctrl.getAllTasks);

router.post('/', authenticate, validateBody(taskSchemas.addTaskSchema), ctrl.addTask);


module.exports = router;