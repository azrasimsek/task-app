const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const taskController = require('./controllers/taskController');
const userController = require('./controllers/userController');

const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Task Management API'});
}); 
app.post('/login', userController.login);
app.post('/logout', userController.logout);
app.post('/register', userController.createUser);
// Routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});