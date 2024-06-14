const errorHandlers = (err, _, res, __) => {
  res.status(err.status);
  res.send(err);
};

module.exports = [errorHandlers];