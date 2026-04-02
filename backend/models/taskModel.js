const pool = require('../config/db');
const bcrypt = require('bcrypt');

const Task = {
    // Create a new task
    create: async (title, description, userId) => {
        const [result] = await pool.query(
            'INSERT INTO tasks (title, description, user_id) VALUES (?,?,?)',
            [title, description, userId]
        );
        return { id: result.insertId };
    },
    // Get all tasks
    getAll: async (user_id) => {
        const [rows] = await pool.query('SELECT * FROM tasks WHERE user_id = ?', [user_id]);
        return rows;
    },
    // Get a task by ID
    getById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
        return rows[0];
    },
    // Update a task
    update: async (id, title, description) => {
        const [result] =await pool.query('UPDATE tasks SET title = ?, description =? WHERE id = ?', [title, description, id]);
        return result.affectedRows;
    },
    // Delete a task
    delete: async (id) => {
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = Task;