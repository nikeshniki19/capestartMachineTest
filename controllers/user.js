const User = require("../models/user");
const Book = require("../models/book");
const Cart = require("../models/cart")

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "No user was found"
            })
        }
        req.profile = user;
        next();
    })
}

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    return res.json(req.profile);
}

exports.getAllUsers = (req, res) => {

    User.find().exec((err, users) => {
        if(err || !users){
            return res.status(400).json({
                error: "No users found"
            })
        }
        res.json(users)
    })

}

exports.getBook = (req, res) => {
res.json(req.book)
}

exports.userLendedBooks = (req, res) => {

    Cart.find({user: req.profile._id})
    .populate("user", "_id name")
    .exec((err, cart) => {
        if(err){
            return res.status(400).json({
                error:"No books lended by this user"
            })
        }
        return res.json(cart)

    })

}

exports.pushCartInLendedBooks = (req,res) => {

    let lendedBooks = []

    req.body.cart.books.forEach(book => {
        lendedBooks.push({
            _id: book._id,
            name: book.name,
            category: book.category,
            author: book.author,
            publisher: book.publisher,
            quantity:book.quantity
        })
    });

    User.findOneAndUpdate(
        {_id: req.profile._id},
        {$push: {lendedBooks: lendedBooks}},
        {new: true},
        (err, lendedBooks) =>{
            if(err){
                return res.status(400).json(
                    {
                        error:"Unable to save in DB"
                    }
                )
            }
            next();
        }
        )
}
exports.lendBook = (req,res) => {
    const filter = { _id : req.book._id }
    const update = { lendedUser : req.profile._id}
    Book.findOneAndUpdate(filter,update,{
        new: true
      }).exec(
        (err,book) => {
            if (err) {
                return res.status(400).json({
                  error: "No Books found",
                });
              }
              res.json(book);
        }
    )
}

exports.returnBook = (req,res) => {
    const filter = { _id : req.book._id }
    const update = { lendedUser : ''}
    Book.findOneAndUpdate(filter,update,{
        new: true
      }).exec(
        (err,book) => {
            if (err) {
                return res.status(400).json({
                  error: "No Books found",
                });
              }
              res.json(book);
        }
    )
}

exports.getBooksByUserId = (req,res) => {
    Book.find({ 'lendedUser': req.profile._id }).exec(
        (err,books) => {
            if(err){
                return res.status(400).json({
                    error: "No Books found",
                  });
            }
            res.json(books)
        }
    )
}
exports.getBooksByCategory = (req,res) => {
    Book.find({ 'category': req.body.category }).exec(
        (err,books) => {
            if(err){
                return res.status(400).json({
                    error: "No Books found",
                  });
            }
            res.json(books)
        }
    )
}
exports.getBooksByAuthor = (req,res) => {
    Book.find({ 'author': req.body.author }).exec(
        (err,books) => {
            if(err){
                return res.status(400).json({
                    error: "No Books found",
                  });
            }
            res.json(books)
        }
    )
}
exports.getBooksByPublisher = (req,res) => {
    Book.find({ 'publisher': req.body.publisher }).exec(
        (err,books) => {
            if(err){
                return res.status(400).json({
                    error: "No Books found",
                  });
            }
            res.json(books)
        }
    )
}
