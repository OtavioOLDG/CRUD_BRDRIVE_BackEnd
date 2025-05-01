const defaultController = require('../controllers/default.controller.js');

async function defaultRoutes(fastify, options) {
    fastify.get('/', defaultController.getDefault);
}

module.exports = defaultRoutes;