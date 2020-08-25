const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  if (err.name === "CastError") {
    error = new ErrorResponse(`${err.value} is not a valid ID`, 404);
  }
  if (err) {
    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  }
  next();
};

module.exports = errorHandler;
