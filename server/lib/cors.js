const allowedOrigins = [
  "http://localhost:3000",
  "https://filmfave.vercel.app",
];
function withCors(handler) {
  return async (req, res) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }

    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    return handler(req, res);
  };
}

module.exports = withCors;
