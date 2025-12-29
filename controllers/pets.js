const express = require("express")
const Pet = require("../models/pet")
const router = express.Router()

//Post + /pets/
router.post("/", async (req, res) => {
    try {
        const pet = await Pet.create(req.body)
        res.status(201).json({ pet })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "failed to create pet" })
    }

})
//Get + /pets/
router.get("/", async (req, res) => {
    try {
        const pets = await Pet.find({})
        res.status(200).json({ pets })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to get pets" })
    }
})
//get + /pets/123
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const pet = await Pet.findById(id)
        if (!pet) {
            res.status(404).json({ err: "Pet not found" })
        }
        else {
            res.status(200).json({ pet })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to get pet" })
    }
})
//delete + /pets/123
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const pet = await Pet.findByIdAndDelete(id)
        if (!pet) {
            res.status(404).json({ err: "Pet not found" })
        }
        else {
            res.status(200).json({ pet })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "Failed to delete" })
    }
})
//put + /pets/123
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const pet = await Pet.findByIdAndUpdate(id, req.body,{new: true})
        if (!pet) {
            res.status(404).json({ error: "Pet not found" })
        }
        else {
            res.status(200).json({ pet })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to update" })
    }
})
module.exports = router