const animalService = require("../services/animal.service");

module.exports = {
  getAnimals: async (req, reply) => {
    try {
      const animals = await animalService.getAnimals();
      //console.log(animals); Usei pra debugar
      reply.send(animals);
    } catch (error) {
      console.error(error);
      reply.status(400).send({ msg: "Erro na listagem de animais" });
    }
  },

  getAnimalById: async (req, reply) => {
    try {
      const { id } = req.params;
      const animal = await animalService.getAnimalById(id);
      if (!animal) {
        return reply.status(404).send({ msg: "Animal não encontrado" });
      }
      reply.send(animal);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao buscar animal" });
    }
  },

  createAnimal: async (req, reply) => {
    try {
      const { nome, especie, idade, habitat, cuidadorId } = req.body;
      const animal = await animalService.createAnimal({
        nome,
        especie,
        idade,
        habitat,
        cuidadorId,
      });
      reply.status(201).send(animal);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao criar animal" });
    }
  },

  updateAnimal: async (req, reply) => {
    try {
      const { id } = req.params;
      const dados = req.body;

      const animalAtuaiizado = await animalService.updateAnimal(id, dados);

      reply.send(animalAtuaiizado);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao atualizar animal" });
    }
  },

  deleteAnimal: async (req, reply) => {
    try {
      const { id } = req.params;
      await animalService.deleteAnimal(id);
      reply.status(200).send({ msg: "Animal de id: " + id + " deletado!" });
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao deletar animal" });
    }
  },

  updateZookeeperAnimal: async (req, reply) => {
    try {
      const { animalId, zookeeperId } = req.body;
      if (!animalId || !zookeeperId) {
        return reply
          .status(400)
          .send({ msg: "Animal ou cuidador não informados" });
      }
      const animal = await animalService.updadteZookeeperAnimal(
        animalId,
        zookeeperId
      );
      reply.status(200).send(animal);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao atualizar cuidador do animal" });
    }
  },
};
