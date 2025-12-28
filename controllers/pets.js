const express = require("express")
const Pet = require("../models/pet")
const router = express.Router()

//Post + /pets/
router.post("/", async (req,res) => {
    res.json(req.body)
})

module.exports = router