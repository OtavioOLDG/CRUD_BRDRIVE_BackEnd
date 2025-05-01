const zookeeperController = require('../controllers/zookeeper.controller');

async function zookeeperRoutes(fastify, options) {
    fastify.get('/zookeepers', zookeeperController.getZookeepers);
    fastify.get('/zookeepers/:id', zookeeperController.getZookeeperById);
    fastify.post('/zookeepers', zookeeperController.createZookeeper);
    fastify.put('/zookeepers/:id', zookeeperController.updateZookeeper);
    fastify.delete('/zookeepers/:id', zookeeperController.deleteZookeeper);
}

module.exports = zookeeperRoutes