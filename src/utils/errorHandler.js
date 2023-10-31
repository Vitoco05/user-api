const errorHandler = (error, _req, res, _next) => {
  if(error.name === 'SequelizeValidationError'){
    const arrObj = {};
    error.errors.map(er => {
      arrObj[er.path] = er.message;
    });
    return res.status().json(arrObj);
  }
  return res.status().json({
    message: error.message,
    error: error
  });
}

module.exports = errorHandler;