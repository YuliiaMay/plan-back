const { ctrlWrapper } = require('../../helpers');
const { Task } = require('../../models');

const getAllTasks = async (req, res, next) => {
    const { _id: authorId } = req.user;
    const { page = 1, limit = 15 } = req.query;
    const skip = (page - 1) * limit;

    const result = await Task.find({ authorId }, "-createdAt -updatedAt", { skip, limit });
    
    res.json(result);
};

module.exports = {
    getAllTasks: ctrlWrapper(getAllTasks)
}