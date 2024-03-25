import express from "express";
import bodyParser from "body-parser";
import dbConnect from "./mongodb.js";
import { ObjectId } from "mongodb";

const app = express();
const PORT = process.env.PORT || 4000;

// In-memory data store
// let posts = [
//     {
//       title: "The Rise of Decentralized Finance",
//       content:
//         "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
//       author: "Alex Thompson",
//       date: "2023-08-01T10:00:00Z",
//     },
//     {
//       title: "The Impact of Artificial Intelligence on Modern Businesses",
//       content:
//         "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
//       author: "Mia Williams",
//       date: "2023-08-05T14:30:00Z",
//     },
//     {
//       title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
//       content:
//         "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
//       author: "Samuel Green",
//       date: "2023-08-10T09:15:00Z",
//     },
//   ];
//now we will replace this with mongodb as database

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//GET all posts
app.get("/posts", async (req, res) => {
  try {
    const col = await dbConnect();
    const posts = await col.find().toArray();
    res.json(posts);
  } catch (error) {
    console.error("Unable to get posts", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get from a specific id
app.get("/posts/:id", async (req, res) => {
  try {
    const col = await dbConnect();
    const searchId = req.params.id;
    const result = await col.findOne({ _id: new ObjectId(searchId) });
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(result);
  } catch (error) {
    console.error("Unable to get post", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//POST a new Post
app.post("/posts", async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: new Date(),
    };
    const col = await dbConnect();
    const response = await col.insertOne(newPost);
    if (response.acknowledged) {
      res.status(201).json(newPost);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//PUT (replace) a specific post
app.put("/posts/:id", async (req, res) => {
  try {
    const col = await dbConnect();
    const searchId = req.params.id;
    req.body.date=new Date();

    const result = await col.replaceOne({ _id:new ObjectId(searchId) }, req.body);
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
    const col = await dbConnect();
    const searchId = req.params.id;
    const result = await col.updateOne(
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
    const col = await dbConnect();
    const searchId = req.params.id;
    const result = await col.deleteOne({ _id:new  ObjectId(searchId) });
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
  console.log("API Server running on http://localhost:" + PORT);
});
