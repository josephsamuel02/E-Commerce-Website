const router = require("express").Router();
const User = require("../models/User");
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });
    if (user == null) {
        try {
            const savedUser = await newUser.save();
            const { password, ...others } = savedUser._doc;

            res.json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.json("user already exist, try another username");
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        !user && res.status(401).json("Can't find user");

        const decpassword = Cryptojs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        ).toString(Cryptojs.enc.Utf8);

        decpassword !== req.body.password &&
            res.status(401).json("incorrect credential(s)");

        const accesstoken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC_KEY,
            { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accesstoken });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
