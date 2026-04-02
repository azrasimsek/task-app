const pool = require('../config/db');
const bcrypt = require('bcrypt');

const User = {
    // Create a new user
    create: async (name , email , password) => {
        const hashedPassword = await bcrypt.hash(password,10);
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password, yetki) VALUES (?,?,?,?)',
            [name, email, hashedPassword, 0]
        );
        return { id: result.insertId };
    },
    // Get all users
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    },
    // Get a user by ID
    getById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    },
    // Get a user by email
    getByEmail: async (email) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },
    // Update a user
    update: async (id, name, email, password) => {
        const hashedPassword = await bcrypt.hash(password,10);
        const [result] =await pool.query(
            'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
            [name, email, hashedPassword, id]
        );
        return result.affectedRows;
    },
    // Delete a user
    delete: async (id) => {
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = User;