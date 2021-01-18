class LogMiddleware {
  register(req, res, next) {
    console.log(req.method, req.url, req.ip, req.params, req.query);

    next();
  }
}

// solid

export default new LogMiddleware();
