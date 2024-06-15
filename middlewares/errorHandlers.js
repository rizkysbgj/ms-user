const errorHandlers = (err, _, res, __) => {
  res.send(err);
};

module.exports = [errorHandlers];