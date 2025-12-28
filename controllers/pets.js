const express = require("express")
const Pet = require("../models/pet")
const router = express.Router()

//Post + /pets/
router.post("/", async (req,res) => {
    try{
        const pet = await Pet.create(req.body)
        res.status(201).json({pet})
    }
    catch(err){
        console.log(err)
        res.status(500).json({err: "failed to create pet"})
    }

})

module.exports = router