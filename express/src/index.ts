import { PrismaClient } from "@prisma/client";
import express from "express";
import { Express, Request, Response } from "express";
import cors from 'cors';

const port = 3000;

const prisma = new PrismaClient()

const app: Express = express()

app.use(cors({
    origin: [`http://${process.env.FRONT_IP}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false,
    optionsSuccessStatus: 204
}));

app.use(express.json())

// register routes
app.get("/users", async function (req: Request, res: Response) {
    const users = await prisma.user.findMany()
    if (users.length === 0) {
        res.status(404).json({ message: "No users found" })
    } else {
        res.json(users)
    }
})

// start express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
