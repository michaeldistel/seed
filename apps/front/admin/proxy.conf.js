const DEFAULT_API_URL = 'http://localhost:8080';

module.exports = {
  '/api': {
    target: process.env.FRONT_ADMIN_API_URL || DEFAULT_API_URL,
    secure: false,
  },
};
