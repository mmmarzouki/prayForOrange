module.exports = (app) => {
  const books = require("../controllers/book.controller.js");
  var router = require("express").Router();
  // Create a new Book
  router.post("/", books.create);
  // Retrieve all books
  router.get("/", books.findAll);
  // Retrieve all published books
  router.get("/available", books.findAllAvailable);
  // Retrieve a single Book with id
  router.get("/:id", books.findOne);
  // Update a Book with id
  router.put("/:id", books.update);
  // Delete a Book with id
  router.delete("/:id", books.delete);
  app.use("/api/books", router);
};
