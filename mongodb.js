// import {MongoClient} from "mongodb";
// const url = "mongodb://localhost:27017";
// const client= new MongoClient(url);

// const dbConnect= async ()=>{
//     let conn=await client.connect();
//     let db = client.db("mydb");
//     let collection = db.collection("blog");
    
//     return collection;
// }

const url = "mongodb://localhost:27017/mydb";
import mongoose from 'mongoose';
await mongoose.connect(url)

const blogSchema= mongoose.Schema({
title:{type:String,required:true},
content:{type:String,required:true},
author:{type:String,default: 'Anonymous'},
date: {
    type: Date,
    default: Date.now, // Default value of current date/time
  }
})

const blog = new mongoose.model('blog',blogSchema)

export default blog;
