import express from "express";
const router = express.Router();

// Temporary blog storage (later from DB)
let blogs = [
  { id: 1, title: "Top 10 Must-Visit Destinations", content: "..." },
];

// Get all blogs
router.get("/", (req, res) => {
  res.json(blogs);
});

// Add blog (only admin later)
router.post("/", (req, res) => {
  const newBlog = { id: Date.now(), ...req.body };
  blogs.push(newBlog);
  res.json(newBlog);
});

export default router;
