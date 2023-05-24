const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    let decoded = jwt.verify(token, "shoes");
    if (decoded) {
      next();
    } else {
      res.send("Please Sign In First");
    }
  } else {
    res.send("Please Sign In First");
  }
};
module.exports = {
  authorize,
};
