const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const userController = {
    // Create a new user
    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.create(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Get a user by ID
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.getById(id);
            if (user){
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ message: 'User not found'});
            }
        }
        catch (error){
            res.status(500).json({ error: error.message});
        }
    },
    // Update a user
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const affectedRows = await User.update(id, name, email, password);
            if (affectedRows > 0){
                res.status(200).json({ message: 'User updated successfully'});
            }
            else {
                res.status(404).json({ message: 'User not found'});
            }
        }
        catch (error){
            res.status(500).json({ error: error.message});
        }
    }
    ,// Delete a user
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const affectedRows = await User.delete(id);
            if (affectedRows > 0){
                res.status(200).json({ message: 'User deleted successfully'});
            }
            else {
                res.status(404).json({ message: 'User not found'});
            }
        }
        catch (error){
            res.status(500).json({ error: error.message});
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.getByEmail(email);
            if (user && await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({ id: user.id , yetki: user.yetki }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({ message: 'User logged in successfully', token });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    logout: (req, res) => {
        // Invalidate the token on the client side (e.g., by deleting it from local storage)
        res.status(200).json({ message: 'User logged out successfully' });
    }
};

module.exports = userController;