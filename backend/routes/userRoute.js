import express from "express";
const router = express.Router();
import User from "../models/userDataModel.js";

router.post("/",async(req,res)=>{
    try {
        
      const {name,email,age} = req.body;
      const userAdded = await User.create({
        name : name,
        email : email,
        age : age,
  
      }
  
      );
      res.status(201).json(userAdded);
      
      
    } catch (error) {
      console.log(error);
      res.status(400).json({error: error.message});
    }
      
  });
  
  router.get("/",async(req,res) => {
    try {
       const showAll = await User.find();
       res.status(200).json(showAll);
      
    } catch (error) {
      console.log(error);
      res.send(500).json({error: error.message});
    }
  
  });
// get single user
  router.get("/:id",async(req,res) => {
      const {id} = req.params;

    try {
       const singleUser = await User.findById({_id : id});
       res.status(200).json(singleUser);
      
    } catch (error) {
      console.log(error);
      res.send(500).json({error: error.message});
    }
  
  });
  
  router.delete("/:id",async(req,res) => {
    const {id} = req.params;

  try {
     const singleUser = await User.findByIdAndDelete({_id : id});
     res.status(200).json(singleUser);
    
  } catch (error) {
    console.log(error);
    res.send(500).json({error: error.message});
  }

});
router.patch("/:id",async (req,res) => {
    const {id} = req.params;
    const {name, email,age} = req.body;

  try {
     const updateUser = await User.findByIdAndUpdate(id,req.body,{
         new: true,
     });
     res.status(200).json(updateUser);
    
  } catch (error) {
    console.log(error);
    res.send(500).json({error: error.message});
  }

});
  export default router;