import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import path from "path"
import { engine as HBengine } from "express-handlebars"
import { session } from "./config"

import Routes from "./src/routes/index"

const app = express()
const port = process.env.PORT_API || 3000

// Session
app.use(session())

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))

// View Engine
app.engine(".hbs", HBengine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: `${__dirname}/src/views/layouts/`,
    partialsDir: `${__dirname}/src/views/partials/`,
}))
app.set("view engine", ".hbs")
app.set("views", "./src/views/pages")

// Routes
app.use(Routes.Home)

// Start server
app.listen(port, () => console.log("Server ON"))