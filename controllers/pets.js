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
router.get("/", async (req,res) => {
    try{
        const pets = await Pet.find({})
        res.status(200).json({pets})
    }
    catch(err){
        console.log(err)
        res.status(500).json({err: "Failed to get pets"})
    }
})
router.get("/:id", async (req,res) => {
    try{
        const {id} = req.params
        const pet = await Pet.findById(id)
        if (!pet){
            res.status(404).json({err:"Pet not found"})
        }
        else{
            res.status(200).json({pet})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({err: "Failed to get pet"})
    }
})
module.exports = router