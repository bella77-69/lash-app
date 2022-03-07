const router = require('express').Router();
const auth = require('../middleware/auth');
const Waiver = require('../models/waiver.model');

router.put("/", async(req,res) => {
    try{
        const { email, fname, lname } = req.body;

        if(!email, fname, lname)
            return res.status(400).json({msg: "Not all fields have been entered"});

        const newWaiver = new Waiver({
            userId: req.user
         
        });
        const savedWaiver = await newWaiver.save();
        res.json(savedWaiver);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get("/",(req,res) => {
    const waiver = Waiver.find({ userId: req.user});
    res.status(200).json();
    // res.json(waiver);
})

router.delete("/:id", auth, async(req,res) => {
    const waiver = await Waiver.findOne({userId: req.user, _id: req.params.id });
    if(!waiver)
        return res.status(400).json({msg: "No waiver item found !!"});
    const deletedItem = await Waiver.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});
module.exports = router;