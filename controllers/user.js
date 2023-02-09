const User = require("../models/user");
const {errorHandler} = require('../helpers/dbErrorHandler');

// exports.sayHi = (req, res) => {
//   res.json({message: "hello there"})
// }

exports.signup = (req, res) => {
  console.log('REQUEST_BODY', req.body)
  const user = new User(req.body);
  user.save((err, user) => {
    if(err) {
      return res.status(400).json({
        err: errorHandler(err);
      })
    }
    res.json({
      user
    });
  })
}

