// Limiteur de débit en mémoire, sans dépendance externe.
// Suffisant pour une seule instance ; à remplacer par un store partagé (Redis) si l'app est répliquée.
function createRateLimiter({ windowMs, max, message }) {
  const hits = new Map();

  return function rateLimiter(req, res, next) {
    const key = req.ip;
    const now = Date.now();
    const entry = hits.get(key);

    if (!entry || now - entry.start > windowMs) {
      hits.set(key, { start: now, count: 1 });
      return next();
    }

    entry.count += 1;
    if (entry.count > max) {
      return res.status(429).json({ error: message || "Trop de tentatives, réessayez plus tard." });
    }
    next();
  };
}

module.exports = createRateLimiter;
