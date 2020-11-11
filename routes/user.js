var express = require("express");
var router = express.Router();

const { getUserById, getUser, getAllUsers, userLendedBooks,lendBook, returnBook, getBooksByUserId,
    getBooksByCategory, getBooksByAuthor, getBooksByPublisher,getBook  } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin,  } = require("../controllers/auth");
const { getBookById } = require("../controllers/admin")

router.param("userId", getUserById);
router.param("bookId", getBookById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/users", getAllUsers);
router.get("/lendedBooks/:userId",isSignedIn, isAuthenticated,getBooksByUserId);
router.get("/books/user/:userId", isSignedIn, isAuthenticated, userLendedBooks);    
router.get("/book/:bookId", getBook);    

router.post("/books/category/:userId", isSignedIn, isAuthenticated, getBooksByCategory);        
router.post("/books/author/:userId", isSignedIn, isAuthenticated, getBooksByAuthor);        
router.post("/books/publisher/:userId", isSignedIn, isAuthenticated, getBooksByPublisher);        
// router.get("/testroute", isSignedIn, isAuthenticated,isAdmin, (req,res) => {
//     return res.send("Admin")

// });
router.put("/books/lend/:bookId/:userId", isSignedIn,isAuthenticated,lendBook)        
router.put("/books/return/:bookId/:userId", isSignedIn,isAuthenticated,returnBook)        



module.exports = router;