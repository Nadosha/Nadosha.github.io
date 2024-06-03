import express, { Request, Response } from 'express';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

// Define types for user object
interface User {
    _id: string;
    isActive: boolean;
    balance: number;
    picture: string;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
}

// Initialize Express app
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Load data from JSON file
let rawData = fs.readFileSync('data.json');
let users: User[] = JSON.parse(rawData.toString());

app.use(cors());
// Route to get all users
app.get('/users', (req: Request, res: Response) => {
    res.json(users);
});

// Route to get a user by ID
app.get('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const user = users.find(user => user._id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

// Route to create a new user
app.post('/users', (req: Request, res: Response) => {
    const newUser: User = {
        _id: uuidv4(),
        ...req.body
    };
    users.push(newUser);
    fs.writeFileSync('data.json', JSON.stringify(users, null, 2));
    res.status(201).json(newUser);
});

// Route to update an existing user
app.put('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const updateUserIndex = users.findIndex(user => user._id === id);
    if (updateUserIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    const updatedUser = {
        ...users[updateUserIndex],
        ...req.body
    };
    users[updateUserIndex] = updatedUser;
    fs.writeFileSync('data.json', JSON.stringify(users, null, 2));
    res.json(updatedUser);
});

// Route to delete a user
app.delete('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const deleteUserIndex = users.findIndex(user => user._id === id);
    if (deleteUserIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    const deletedUser = users.splice(deleteUserIndex, 1);
    fs.writeFileSync('data.json', JSON.stringify(users, null, 2));
    res.json(deletedUser[0]._id);
});

// Start the server
app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});
