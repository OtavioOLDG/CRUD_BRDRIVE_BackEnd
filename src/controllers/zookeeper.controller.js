const zookeeperService = require("../services/zookeeper.service");

module.exports = {
  getZookeepers: async (req, reply) => {
    try {
      const zookeepers = await zookeeperService.getZookeepers();
      reply.send(zookeepers);
    } catch (error) {
      console.error(error);
      reply.status(400).send({ msg: "Erro na listagem de cuidadores" });
    }
  },

  getZookeeperById: async (req, reply) => {
    try {
      const { id } = req.params;
      const zookeeper = await zookeeperService.getZookeeperById(id);
      if (!zookeeper) {
        return reply.status(404).send({ msg: "Cuidador não encontrado" });
      }
      reply.send(zookeeper);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao buscar cuidador" });
    }
  },

  /*createZookeeper: async (req, reply) => {
        try {
            const { nome, cpf, idade, especialidade} = req.body;
            const zookeeper = await zookeeperService.createZookeeper({ nome, cpf, idade, especialidade });
            reply.status(201).send(zookeeper);
        } catch (error) {
            console.error(error);
            reply.status(500).send({ msg: 'Erro ao criar cuidador' });
        }
    },*/

  createZookeeper: async (req, reply) => {
    try {
      const { nome, cpf, idade, especialidade } = req.body; // Desestruturando os dados
      // Passando os dados corretamente para o service
      const zookeeper = await zookeeperService.createZookeeper({
        nome,
        cpf,
        idade,
        especialidade,
      });
      reply.status(201).send(zookeeper);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao criar zookeeper" });
    }
  },

  updateZookeeper: async (req, reply) => {
    try {
      const { id } = req.params;
      const dados = req.body;

      const zookeeperAtualizado = await zookeeperService.updateZookeeper(
        id,
        dados
      );

      reply.send(zookeeperAtualizado);
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao atualizar cuidador" });
    }
  },

  deleteZookeeper: async (req, reply) => {
    try {
      const { id } = req.params;
      await zookeeperService.deleteZookeeper(id);
      reply.status(200).send({ msg: "Cuidador de id: " + id + " deletado!" });
    } catch (error) {
      console.error(error);
      reply.status(500).send({ msg: "Erro ao deletar cuidador" });
    }
  },
};
