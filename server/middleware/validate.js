const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: true });
  if (error) {
    const raw = error.details[0].message;
    const field = error.details[0].path.join('.');
    const label = field.split('.').pop().replace(/([A-Z])/g, ' $1').replace(/_/g, ' ');
    const msg = raw.includes('is not allowed')
      ? `"${label}" field is not accepted. Please contact support.`
      : raw.replace(/["]/g, '').replace(field, label);
    return res.status(400).json({ message: msg });
  }
  next();
};

export default validate;
