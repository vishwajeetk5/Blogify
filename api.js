import express from "express";
import bodyParser from "body-parser";
import blog from "./mongodb.js";
import {ObjectId} from 'mongodb'
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

//GET all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await blog.find();
    res.json(posts);
  } catch (error) {
    console.error("Unable to get posts", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get from a specific id
app.get("/posts/:id", async (req, res) => {
  try {
    const searchId = req.params.id;
    const post = await blog.findOne({ _id: new ObjectId(searchId) });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error("Unable to get post", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//Search in content with keyword
app.get("/search/:key",async (req,res)=>{
  try{
    let key = req.params.key;
   const posts = await blog.find({ content: { $regex: new RegExp(key, "i") } })
   console.log(`${posts.length} search results for '${key}'`)
   res.json({"searchResult":posts.length,"foundin":posts})
  }
  catch(error){
    console.error("Unable to search", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})
//POST a new Post
app.post("/posts", async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: new Date(),
    };
    const data = new blog(newPost);
    const savedPost = await data.save();
    if (savedPost) {
      res.status(201).json({message:"New post created succesfully",savedPost});
    }
  } catch (error) {
    console.error("Error creating new Post",error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//PUT (replace) a specific post
app.put("/posts/:id", async (req, res) => {
  try {
    const searchId = req.params.id;
    req.body.date=new Date();

    const result = await blog.replaceOne({ _id:new ObjectId(searchId) }, req.body);
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post replaced",updatedPost:req.body });
  } catch (error) {
    console.error("Error replacing post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//PATCH (update) a specific post
app.patch("/posts/:id", async (req, res) => {
  try {
    const searchId = req.params.id;
    const result = await blog.updateOne(
      { _id: new ObjectId(searchId) },
      { $set: req.body }
    );
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post updated" });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//DELETE a specific post
app.delete("/posts/:id", async (req, res) => {
  try {
    const searchId = req.params.id;
    const result = await blog.deleteOne({ _id:new  ObjectId(searchId) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: searchId+" post deleted" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
