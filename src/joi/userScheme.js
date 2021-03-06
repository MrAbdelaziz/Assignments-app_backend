const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  role: Joi.string().required(),
  groupe: Joi.string(),
  avatar: Joi.string().required(),
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
