const { body, validationResult } = require("express-validator");


const validatePatchCourse = [
  // allow only title or price keys
  (req, res, next) => {
	const allowed = ["title", "price"];
	const invalidKeys = Object.keys(req.body).filter(
	  key => !allowed.includes(key)
	);
	if (invalidKeys.length > 0) {
	  return res.status(400).json({ msg: `Invalid fields: ${invalidKeys.join(", ")}` });
	}
	next();
  },

  // title validation (if exists)
  body("title")
	.optional()        // only run if field is present
	.trim()
	.notEmpty().withMessage("Title cannot be empty")
	.isLength({ min: 2 }).withMessage("Title must be at least 2 chars"),

  // price validation (if exists)
  body("price")
	.optional()
	.isNumeric().withMessage("Price must be numeric")
	.toFloat(),
  // error handler
  (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
	}
	next();
  }
];

const validatePostCourse=[
	body('title')
	.trim()
	.stripLow() // skip assci chars
	.notEmpty()
	.withMessage('title is required')
	.isLength({ min: 2 })
	.withMessage('title at least 2 chars')
	,body('price')
	.notEmpty()
	.withMessage("Price Required")
	.isNumeric()
	.withMessage("Must be num")
	.toFloat()
	];

module.exports = { validatePatchCourse, validatePostCourse };
