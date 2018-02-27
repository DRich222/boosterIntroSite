let server =
  process.env.NODE_ENV === "production"
    ? "http://boost-r.com"
    : "http://localhost:3000";

module.exports = server;
