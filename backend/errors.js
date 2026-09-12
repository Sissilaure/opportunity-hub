// Erreur métier avec un code HTTP explicite, distincte d'une erreur inattendue (bug, panne DB).
class AppError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

// Évite un try/catch répété dans chaque route : toute rejection de la fonction async
// est transmise à errorHandler via next().
function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

// Middleware d'erreur unique pour toute l'API.
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.status).json({ error: err.message });
  }
  console.error(err);
  res.status(500).json({ error: "Une erreur interne est survenue." });
}

module.exports = { AppError, asyncHandler, errorHandler };
