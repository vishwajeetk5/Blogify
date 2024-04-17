import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Route to render the main page
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    // console.log(response.data.length+" posts loaded");
    res.render("index.ejs", { posts: response.data,searchData:{}});
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

//Routr to render new post page
app.get("/new", (req, res) => {
  res.render("modify.ejs", { heading: "New Post", submit: "Create Post" });
});

// Route to render the edit page
app.get("/edit/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${req.params.id}`);
    res.render("modify.ejs", {
      heading: "Edit Post",
      submit: "Update Post",
      post: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
});

//After the user submits, the server calls the API server to create a new post.
app.post("/createPost", async (req, res) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, req.body);
    console.log(response.data);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error creating post"});
  }
});

// After the user updates a post, the server calls the API server to partially update a post

app.post("/editPost/:id", async (req, res) => {
  try {
    console.log(req.params.id+" is here to edit with patch")
    const response = await axios.patch(
      `${API_URL}/posts/${req.params.id}`,
      req.body
    );
    console.log(response.data)
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
});

// Delete a post with id
app.get("/api/posts/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/posts/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

// app.post("/search",async(req,res)=>{
//   try{
//     const result = await axios.get(`${API_URL}/search/${req.body.key}`);
//     console.log(result.data.searchResult)
//     res.render('index.ejs',{posts:[],searchData:result.data})
//   }catch(error){
//     res.status(404).json({message:"Cant Search"})
//   }
// })
// // These routes are meant for use with API testing tools or client-side JavaScript
// // They are not directly accessible from HTML forms
// app.put("/api/posts/:id", async (req, res) => {
//   try {
//     console.log(req.params.id+" is here to edit with put")
//     const response = await axios.put(
//       `${API_URL}/posts/${req.params.id}`,
//       req.body
//     );
//     console.log(response.data);
//     res.redirect("/");
//   } catch (error) {
//     res.status(500).json({ message: "Error updating post" });
//   }
// });

// // These routes are meant for use with API testing tools or client-side JavaScript
// // They are not directly accessible from HTML forms
// app.patch("/api/posts/:id", async (req, res) => {
//   try {
//     const response = await axios.patch(
//       `${API_URL}/posts/${req.params.id}`,
//       req.body
//     );
//     console.log(response.data);
//     res.redirect("/");
//   } catch (error) {
//     res.status(500).json({ message: "Error updating post" });
//   }
// });

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
