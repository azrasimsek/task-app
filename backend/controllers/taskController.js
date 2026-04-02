const Task = require('../models/Task');

const taskController = {
    // Create a new task
    createTask: async (req, res) => {
        const user_id = req.user.id; // Assuming you have user authentication and the user ID is available in req.user
        try {
            const { title, description } = req.body;
            const task = await Task.create(title, description, user_id);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }, 
    // Get all tasks
    getAllTasks: async (req, res) => {
        const user_id = req.user.id; // Assuming you have user authentication and the user ID is available in req.user
        try {
            const tasks = await Task.getAll(user_id);
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Get a task by ID
    getTaskById: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await Task.getById(id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Update a task
    updateTask: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            const affectedRows = await Task.update(id, title, description);
            if (affectedRows > 0) {
                res.status(200).json({ message: 'Task updated successfully' });
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Delete a task
    deleteTask: async (req, res) => {
        try {            const { id } = req.params;
            const affectedRows = await Task.delete(id);
            if (affectedRows > 0) {
                res.status(200).json({ message: 'Task deleted successfully' });
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = taskController;