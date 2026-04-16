const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Server Error';
  if (process.env.NODE_ENV !== 'production') console.error(err.stack);
  res.status(status).json({ message });
};

export default errorHandler;
