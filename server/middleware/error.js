import ErrorResponse from '../utils/errorResponse.js';

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let error = { ...err };
  error.message = err.message;

  // Handle specific error types
  if (err.name === 'CastError') {
    error = new ErrorResponse('Resource not found', 404);
  }

  if (err.code === 11000) {
    error = new ErrorResponse('Duplicate field value', 400);
  }

  if (err.name === 'ValidationError') {
    error = new ErrorResponse(Object.values(err.errors).map(val => val.message), 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

export default errorHandler;