// Import dependencies 
import express from "express";
import authSchema from "./authValidation.js";
import User from "./userModel.js";

const authRouter = express.Router();

authRouter.post("/register", async(req, res, next)=>{
    try{
        const result = await authSchema.validateAsync(req.body);
        const user = new User(result);
        const createdUser = await user.save();
        
        if(!createdUser){
            return res.status(422).json("Invalid Input data");
        }
        res.status(201).json(createdUser);
    }catch(error){
        res.json(error);
    }
})

export default authRouter ;