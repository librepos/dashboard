// Setup express
const express = require("express")
const router = express.Router()

// Reroute
router.get("/", (req, res) => {
    res.redirect("/admin/home")
})

// Homepage
router.get("/home", (req, res) => {
    res.render("dashboard_home", { pageTitle: "Home", username: req.cookies.username })
})

// Inventory
router.get("/inventory", (req, res) => {
    res.render("dashboard_inventory", { pageTitle: "Inventory", username: req.cookies.username })
})

// Export
module.exports = router