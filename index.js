// Setup env variables
require('dotenv').config()
const PORT = process.env.PORT || 80

// Setup express
const express = require("express")
const app = express()
app.use(express.static("./public"))
const cookieParser = require("cookie-parser")
app.use(cookieParser())

// Setup pug
app.set("views", "./views")
app.set("view engine", "pug")

// Redirect to login page
app.get("/", (req, res) => {
    res.redirect("/login/server")
})

// Login page
const page_login = require("./routes/login")
app.use("/login", page_login)

// Admin page
const page_admin = require("./routes/admin")
app.use("/admin", page_admin)

// 404 page
app.get("*", (req, res) => {
    res.sendStatus(404)
})

// Listen
app.listen(PORT)