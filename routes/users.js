const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../../models/user.model");

router.get("/", function (req, res) {
  try {
    User.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", function (req, res) {
  User.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  const result = await user.save();
  const { password, ...data } = await result.toJSON();
  res.send(data);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).send({ body: { message: "user not found" } });
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      body: {
        message: "invalid credentials",
      },
    });
  }
  const token = jwt.sign({ id: user.id }, "secret");
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.status(200).send({ message: `success you are logged in ${user.name}` });
});

router.post("/logout", (req, res) => {
  res.cookie("jwt", " ", { maxAge: 0 });
  res.send({ message: "successful logout" });
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.delete("/:id", async(req,res) => {
//   const user = await User.findOne({userId: req.user, _id: req.params.id });
//   if(!user)
//       return res.status(400).json({msg: "No user found !!"});
//   const deletedItem = await User.findByIdAndDelete(req.params.id);
//   res.status(200).send({message: `user id: ${req.params.id} has been deleted from database`})

// });

router.post("/tokenIsValid", auth, async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
