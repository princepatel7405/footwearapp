const express=require("express")
const { CategoryModel } = require("../model/category.model")

const categoryRoute=express.Router()

categoryRoute.post("/",async(req,res)=>{
    let payload=req.body
    try {
        let data=new CategoryModel(payload)
        await data.save()
        res.send("data saved Successfully")
    } catch (error) {
        res.send({"msg": error.message})
    }
})
categoryRoute.get("/",async(req,res)=>{
    
    try {
        let data=await CategoryModel.find()
        res.send(data)
    } catch (error) {
        res.send({"msg": error.message})
    }
})

categoryRoute.patch("/updatecategory/:id",async(req,res)=>{
    let payload=req.body
    let id=req.params.id
    try {
        let data=await CategoryModel.findByIdAndUpdate({"_id":id},payload)
        res.send("Data has been updated successfully")
    } catch (error) {
        res.send({"msg":error.message})
    }
})

categoryRoute.delete("/deletecategory/:id",async(req,res)=>{
let id=req.params.id
try {
    let data=await CategoryModel.findByIdAndDelete({"_id":id})
    res.send("Data has been deleted successfully")
} catch (error) {
    res.send({"msg":error.message})
}
})

module.exports={
    categoryRoute
}