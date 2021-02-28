const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
  thumbnail: Joi.string().required(),
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
