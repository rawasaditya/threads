import { Request, Response } from "express";

// Dummy data for now
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// Get all users
export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

// Create a new user
export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};
