const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  remarques: Joi.string().required(),
  type: Joi.string().required(),
  note: Joi.number().required(),
  assignment: Joi.required(),
  user: Joi.required(),
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
