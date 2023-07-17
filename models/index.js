const { Task, taskSchemas } = require("./task");
const { User, userSchemas } = require("./user");
const roles = require('./roles');
const categoriesSchema = require('./taskCategories');
const statusesSchema = require('./taskStatuses');
const prioritiesSchema = require('./taskPriorities');


module.exports = {
    User,
    userSchemas,
    Task,
    taskSchemas,
    prioritiesSchema,
    statusesSchema,
    categoriesSchema,
    roles
};