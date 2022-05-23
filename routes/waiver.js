const router = require('express').Router();
const auth = require('../middleware/auth');
const Waiver = require('../models/waiver.model');

router.get("/", function (req, res) {
    try {
        Waiver.find((err, data) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(data)
            }
        })
 
    } catch (error) {
        console.log(error);
    }
 })

 router.post('/add', function (req,res) {
    const dbfeed = req.body
    try {
        Waiver.create(dbfeed, (err, data) => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.status(201).send(data)
            }
        })
        } catch (error) {
            console.log(error);
        }
    });



router.get("/:id",(req,res) => {
    Waiver.findOne({ _id: req.params.id },(err, data) => {
        if (err) {
            res.status(500).send(err)
         
        } else {
            res.status(200).send(data)
           
        }
    })
})


router.delete("/:id", async(req,res) => {
    const waiver = await Waiver.findOne({userId: req.user, _id: req.params.id });
    if(!waiver)
        return res.status(400).json({msg: "No waiver item found !!"});
    const deletedItem = await Waiver.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});
module.exports = router;