var express = require("express");
var router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

const { 
    createAuthor, getAuthorById, getAuthor, getAllAuthor, updateAuthor, removeAuthor,
    createPublisher, getPublisherById, getPublisher, getAllPublisher, updatePublisher, removePublisher,
    createBook, getBookById, getBook, getAllBook, updateBook, removeBook, photo    } = require("../controllers/admin");
const { getProduct } = require("../../../programming/Learn Code Online/lcomernbootcamp/projbackend/controllers/product");

//params
router.param("userId", getUserById);
router.param("authorId", getAuthorById);
router.param("publisherId", getPublisherById);
router.param("bookId", getBookById);

//Author Crud

//create
router.post(
  "/author/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createAuthor
);

//read
router.get("/author/:authorId", getAuthor);
router.get("/authors", getAllAuthor);

//update
router.put(
  "/author/:authorId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateAuthor
);
//delete
router.delete(
  "/author/:authorId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeAuthor
);


//Publisher crud

//create
router.post(
    "/publisher/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createPublisher
  );
  
  //read
  router.get("/publisher/:publisherId", getPublisher);
  router.get("/publishers", getAllPublisher);
  
  //update
  router.put(
    "/publisher/:publisherId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updatePublisher
  );
  //delete
  router.delete(
    "/publisher/:publisherId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removePublisher
  );


//Book crud

//create
router.post(
    "/book/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createBook
  );

  //read
  router.get("/book/:bookId", getBook);
  router.get("/books", getAllBook);
  router.get("/book/photo/:bookId", photo, getBook)
  
  //update
  router.put(
    "/book/:bookId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateBook
  );
  //delete
  router.delete(
    "/book/:bookId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeBook
  );


module.exports = router;
