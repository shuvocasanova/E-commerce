const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config()


//Register
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try{
        const savedUser = await newUser.save();
            res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
    
})

//Login

router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({username: req.body.username})
            !user && res.status(404).json("Wrong Credentials"); 

        const hashedPassword =  CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password && res.status(401).json("Wrong password");

        const accesToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, 
        process.env.JWT_SEC,
        {expiresIn: "3d"}
        )
        
        const { password , ...others} = user._doc;
            res.status(200).json({...others, accesToken})
    } catch(err){
        res.status(500).json(err);
    }
    
})

module.exports = router