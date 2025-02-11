const { check, validationResult } = require("express-validator");

const validateContact = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Invalid email").isEmail(),
  check("phone", "Phone number is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateContact };
