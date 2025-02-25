import { Request, Response } from "express";
import Thought from "../models/Thought.js";
import User from "../models/User.js";

export const getAllThoughts = async (_req:Request, res:Response) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts)
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            message: error
        })
    }
} 


export const createThought = async (_req:Request, res:Response) => {
    try {
        const thought = await Thought.create(_req.body);
        const user = await User.findByIdAndUpdate(
            { _id: _req.body.idUser },
            { $addToSet: { thoughts : { _idThought: thought._id, thoughtText: thought.thoughtText}   } },
            { new: true }
        )
        if(!user) {
            res.status(404).json({ 
                message: "Created thought but didn't find the user"
            })
        }
        res.json({
            ok:true
        }) 
    } catch (error) {
        console.log(error)
    }
}

export const getThoughtById = async (_req:Request, res:Response) => {
    try {
        const thought = await Thought.findById({ _id : _req.params.idThought });
        if(!thought) {
            res.status(404).json({ 
                message: "Thought didn't find"
            })
        }
        res.json(thought) 
    } catch (error) {
        console.log(error)
    }
}

export const createReaction = async (_req:Request, res:Response) => {
    try {       
        const thought = await Thought.findByIdAndUpdate(
            { _id : _req.params.thoughtId },
            { $addToSet: { reactions: _req.body } },
            { new: true }
        )
        
        if(!thought) { 
            res.status(404).json({ msg:"There is a mistake" })
        }
        res.json({
            ok: true,
            thought
        })

    } catch (error) {
        console.log(error);
    }
}

export const deleteReaction = async (_req:Request, res:Response) => {
    try {       
        const thought = await Thought.findByIdAndUpdate(
            { _id : _req.params.thoughtId },
            { $pull: { reactions: _req.body } },
            { new: true }
        )
        
        if(!thought) { 
            res.status(404).json({ msg:"There is a mistake" })
        }
        res.json({
            ok: true,
        })
        return;

    } catch (error) {
        console.log(error);
    }
}