const router = require('express').Router();
const auth = require('../middleware/auth');
const Appointment = require('../../models/appointment.model');

router.get("/", function (req, res) {
   try {
       Appointment.find((err, data) => {
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
        Appointment.create(dbfeed, (err, data) => {
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

router.get('/:id', function (req, res) {
    Appointment.findOne({ _id: req.params.id },(err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteAppointment = await Appointment.deleteOne({ _id:req.params.id });
        res.status(200).json(deleteAppointment);
      } catch (err) {
          res.statusMessage(500).json({ error: err.message});
      }
    });
        
// router.put("/", async(req,res) => {
//     try{
//         const { email, fname, lname } = req.body;

//         if(!email, fname, lname)
//             return res.status(400).json({msg: "Not all fields have been entered"});

//         const newWaiver = new Waiver({
//             userId: req.user
         
//         });
//         const savedWaiver = await newWaiver.save();
//         res.json(savedWaiver);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// })


module.exports = router;