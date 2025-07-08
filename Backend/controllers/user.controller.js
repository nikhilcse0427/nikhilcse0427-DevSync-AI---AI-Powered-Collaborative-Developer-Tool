import userModel from '../models/user.model.js';
import * as userService from '../services/user.service.js';
import { validationResult } from 'express-validator';
import RedisClient from '../services/redis.services.js';


export const createUserController = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const user = await userService.createUser(req.body);
        const token = await user.generateJWT();
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const loginUserController = async (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({message: errors.array()})
    }
    try{
        const {email, password} = req.body
        const user = await userModel.findOne({email}).select('+password')
        if(!user){
            res.status(401).json({message: "user having this email does not exist"})
        }

        const isMatch = user.isValidPassword(password)
        if(!isMatch){
            res.status(401).json({message: "Wrong password entered"})
        }
        const token = await user.generateJWT()
        res.status(400).json({user, token})
    }catch(error){
        res.status(400).json({message: "Wrong credentials entered"})
    }
}

export const profileController = async (req, res) => {

    res.status(200).json({
        user: req.user
    });

}

export const logoutUserController = async ()=>{
    try{
        const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
        RedisClient.set(token, 'logout', 'Ex', 60 * 60 * 24)
        res.status(200).json({message: "User Logout Successfully"})
    }catch(errors){
        res.status(400).json({message: errors})
    }
}

