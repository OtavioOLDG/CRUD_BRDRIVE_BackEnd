const animalController = require("../controllers/animal.controller");

async function animalRoutes(fastify, options) {
  fastify.get("/animals", animalController.getAnimals);
  fastify.get("/animals/:id", animalController.getAnimalById);
  fastify.post("/animals", animalController.createAnimal);
  fastify.put("/animals/:id", animalController.updateAnimal);
  fastify.delete("/animals/:id", animalController.deleteAnimal);
  fastify.put("/animals", animalController.updateZookeeperAnimal);
}

module.exports = animalRoutes;
