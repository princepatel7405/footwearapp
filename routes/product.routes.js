const express=require("express")
const { ProductModel } = require("../model/productModel")

const productRoute=express.Router()

productRoute.post("/",async(req,res)=>{
    let payload=req.body
    try {
        let data=new ProductModel(payload)
        await data.save()
        res.send("Data added successfully")
    } catch (error) {
        res.send({"msg": error.message})
    }
    
})
productRoute.get("/",async(req,res)=>{
    
    try {
        let data=await ProductModel.find().populate('category')
        
        res.send(data)
    } catch (error) {
        res.send({"msg": error.message})
    }
    
})
productRoute.patch("/updateproduct/:id",async(req,res)=>{
    let payload=req.body
    let id=req.params.id
    try {
        let data=await ProductModel.findByIdAndUpdate({"_id":id},payload)
        res.send("Data has been updated successfully")
    } catch (error) {
        res.send({"msg":error.message})
    }
})

productRoute.delete("/deleteproduct/:id",async(req,res)=>{
let id=req.params.id
try {
    let data=await ProductModel.findByIdAndDelete({"_id":id})
    res.send("Data has been deleted successfully")
} catch (error) {
    res.send({"msg":error.message})
}
})
module.exports ={
    productRoute
}