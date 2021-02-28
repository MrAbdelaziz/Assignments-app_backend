const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  password: Joi.string().alphanum().min(3).max(30).required(),
});

const validate = async (req, res, next) => {
  const { error } = await schema.validate(req.body);
  if (error) {
    return res.status(404).json({
      errors: error.message,
    });
  } else {
    next();
  }
};

module.exports = {
  validate,
};
