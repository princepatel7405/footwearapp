const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/userModel.js");
const userRoute = express.Router();
const jwt=require("jsonwebtoken")

userRoute.post("/register", async (req, res) => {
  const { name, password, email } = req.body;
  try {
    if (email) {
        let exist=await User.findOne({ email });
        if(exist){
            res.send("User already Signed in");
        }
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        ...req.body,
        password: hashedPassword,
      });
     await newUser.save()
      if (newUser) {
        return res.send({ msg: "User registered successfully" });
      } else {
        return res.send({ msg: "User registration failed" });
      }
    }
  } catch (error) {
    res.send({ msg: "Try once again to sign up", error: error.message });
  }
});

userRoute.post("/", async(req,res)=>{
    const {email,password}=req.body
    try {
        let data=await User.findOne({email})
        if(data){
            bcrypt.compare(password,data.password,(err,result)=>{
                if (result) {
                    var token = jwt.sign({"_id":data._id}, "shoes");
                    res.send({
                      msg: "User has been logged in successfully",
                      token: token,
                    });
                  } else {
                    res.send("Password is incorrect");
                  }
            })
        }else{
                res.send("Wrong Cridentials");
              
        }
    } catch (error) {
        res.send({ msg: "Try again to Log in ", error: error.message });
    }
})

module.exports = {
  userRoute,
};
