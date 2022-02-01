import express from "express"
import {config as envConfig} from "dotenv"

import indexRoute from "./routes/index"

const app = express()
envConfig()
const port = process.env.PORT_API || 3000

// Configs
app.use(express.json())

// Routes
app.use(indexRoute)

// Start server
app.listen(port, () => console.log("Server ON"))