const User = require("../models/user");

const signup = (req, res) => {
  const user = User(req.body);
  user.save((err, user) => {
    if(err) {
      return res.status(400).json({
        err
      })
    }
    res.json({
      user
    });
  })
}

module.exports = signup;