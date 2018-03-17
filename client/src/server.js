let server =
  process.env.NODE_ENV === "production"
    ? "http://boost-r.com"
    : "http://localhost:3001";

module.exports = server;
