import express from "express";
import Author from "../../core/Author/author.routes.js"
import Book from "../../core/Book/book.routes.js"

const router = express.Router();


// API 
router.use("/author", Author);
router.use("/book",Book)

export default router;