// Setup express
const express = require("express")
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded())

// Login page
router.get("/server", (req, res) => {
    let serverURL = (req.cookies.server == "") ? "" : req.cookies.server

    res.render("login-server", { pageTitle: "Login", serverURL: serverURL })
})

router.get("/user", (req, res) => {
    if (req.cookies.server == "") {
        res.redirect("/login/server")
    } else {
        let defaultUser = (req.cookies.username == "") ? "" : req.cookies.username
        res.render("login-user", { pageTitle: "Login", server: req.cookies.server, defaultUser: defaultUser })
    }
})

router.post("/server", (req, res) => {
    res.cookie("server", req.body.server)
    res.redirect("/login/user")
})

router.post("/user", (req, res) => {
    if (req.body.username == "") {
        res.redirect("/login/user")
    } else {
        res.cookie("username", req.body.username)
        res.redirect("/admin")
    }
})

// Export
module.exports = router