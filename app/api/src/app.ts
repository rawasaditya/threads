import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API!");
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;
