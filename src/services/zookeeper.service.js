const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Pelas boas práticas deixei o tratamento de erros no controller, visto que é ele quem conversa com a api
module.exports = {
  getZookeepers: async () => {
    return await prisma.zookeeper.findMany({ include: { animais: true } });
  },

  getZookeeperById: async (id) => {
    return await prisma.zookeeper.findUnique({
      where: { id },
      include: { animais: true },
    });
  },

  createZookeeper: async (dados) => {
    return await prisma.zookeeper.create({ data: dados });
  },

  updateZookeeper: async (id, dados) => {
    return await prisma.zookeeper.update({ where: { id }, data: dados });
  },

  deleteZookeeper: async (id) => {
    return await prisma.zookeeper.delete({ where: { id } });
  },
};
