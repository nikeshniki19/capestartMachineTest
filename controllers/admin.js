const Author = require("../models/author");
const Publisher = require("../models/publisher");
const Book = require("../models/book");

const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

//Author crud
exports.getAuthorById = (req, res, next, id) => {
  Author.findById(id).exec((err, author) => {
    if (err) {
      return res.status(400).json({
        error: "Author not found in DB",
      });
    }

    req.author = author;
    next();
  });
};

exports.createAuthor = (req, res) => {
  const author = new Author(req.body);
  author.save((err, author) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save author in DB",
      });
    }
    res.json({ author });
  });
};

exports.getAuthor = (req, res) => {
  return res.json(req.author);
};
exports.getAllAuthor = (req, res) => {
  Author.find().exec((err, authors) => {
    if (err) {
      return res.status(400).json({
        error: "No authors found",
      });
    }
    res.json(authors);
  });
};

exports.updateAuthor = (req, res) => {
  const author = req.author;
  author.name = req.body.name;

  author.save((err, updatedAuthor) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update Author",
      });
    }
    res.json(updatedAuthor);
  });
};

exports.removeAuthor = (req, res) => {
  const author = req.author;

  author.remove((err, Author) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete Author",
      });
    }
    res.json({
      message: "successfully deleted",
    });
  });
};

//Publisher crud
exports.getPublisherById = (req, res, next, id) => {
  Publisher.findById(id).exec((err, publisher) => {
    if (err) {
      return res.status(400).json({
        error: "Author not found in DB",
      });
    }

    req.publisher = publisher;
    next();
  });
};

exports.createPublisher = (req, res) => {
  const publisher = new Publisher(req.body);
  publisher.save((err, publisher) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save Publisher in DB",
      });
    }
    res.json({ publisher });
  });
};

exports.getPublisher = (req, res) => {
  return res.json(req.publisher);
};
exports.getAllPublisher = (req, res) => {
  Publisher.find().exec((err, publishers) => {
    if (err) {
      return res.status(400).json({
        error: "No Publishers found",
      });
    }
    res.json(publishers);
  });
};

exports.updatePublisher = (req, res) => {
  const publisher = req.publisher;
  publisher.name = req.body.name;

  publisher.save((err, updatedPublisher) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update Publisher",
      });
    }
    res.json(updatedPublisher);
  });
};

exports.removePublisher = (req, res) => {
  const publisher = req.publisher;

  publisher.remove((err, Publisher) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete Publisher",
      });
    }
    res.json({
      message: "successfully deleted",
    });
  });
};

//Book crud

exports.getBookById = (req, res, next, id) => {
  Book.findById(id).exec((err, book) => {
    if (err) {
      return res.status(400).json({
        error: "Book not found in DB",
      });
    }

    req.book = book;
    next();
  });
};

exports.createBook = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with image",
      });
    }

    const { name, author, publisher, category } = fields;

    if (!name || !author || !publisher || !category ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let book = new Book(fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big",
        });
      }

      book.photo.data = fs.readFileSync(file.photo.path);
      book.photo.contentType = file.photo.type;
    }

    book.save((err, book) => {
      if (err) {
        return res.status(400).json({
          error: "Saving book failed",
        });
      }
      res.json(book);
    });
  });
};

exports.getBook = (req, res) => {
  return res.json(req.book);
};
exports.getAllBook = (req, res) => {
  Book.find().exec((err, books) => {
    if (err) {
      return res.status(400).json({
        error: "No authors found",
      });
    }
    res.json(books);
  });
};

exports.updateBook = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with image",
      });
    }

    let book = req.book;
    console.log(book)
    //updation using lodash
    book = _.extend(book, fields)
    
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big",
        });
      }
      book.photo.data = fs.readFileSync(file.photo.path);
      book.photo.contentType = file.photo.type;
    }

    book.save((err, book) => {
      if (err) {
        return res.status(400).json({
          error: "Updating book failed",
        });
      }
      res.json(book);
    });
  });
};

exports.removeBook = (req, res) => {
  const book = req.book;

  book.remove((err, deletedBook) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete Book",
      });
    }
    res.json({
      message: "successfully deleted",
      deletedBook,
    });
  });
};

exports.photo = (req, res, next) => {
  if (req.book.photo.data) {
    res.set("Content-Type", req.book.photo.contentType);
    return res.send(req.book.photo.data);
  }
  next();
};
