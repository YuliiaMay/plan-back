const { ctrlWrapper } = require("../../helpers");
const { Task } = require("../../models");


const addTask = async (req, res) => {
    console.log(req.body);
    const { _id: authorId } = req.user;
    console.log(authorId);
    const result = await Task.create({
        ...req.body,
        authorId
    });

    res.status(201).json({
        code: 201,
        message: 'Task has created',
        data: result
    });
};


module.exports = {
    addTask: ctrlWrapper(addTask)
}