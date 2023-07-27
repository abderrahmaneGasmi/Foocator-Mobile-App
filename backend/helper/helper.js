exports.sendstatus = (res, statuscode = 401, errormsg) => {
  res.status(statuscode).json({ response: errormsg });
};
