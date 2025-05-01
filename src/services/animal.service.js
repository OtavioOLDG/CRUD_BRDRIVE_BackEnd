const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Pelas boas práticas deixei o tratamento de erros no controller, visto que é ele quem conversa com a api
module.exports = {
  getAnimals: async () => {
    return await prisma.animal.findMany();
  },
  getAnimalById: async (id) => {
    return await prisma.animal.findUnique({ where: { id } });
  },

  createAnimal: async (dados) => {
    return await prisma.animal.create({ data: dados });
  },

  updateAnimal: async (id, dados) => {
    return await prisma.animal.update({ where: { id }, data: dados });
  },

  deleteAnimal: async (id) => {
    return await prisma.animal.delete({ where: { id } });
  },

  updadteZookeeperAnimal: async (id, zookeeperId) => {
    return await prisma.animal.update({
      where: { id },
      data: {
        cuidador: { connect: { id: zookeeperId } },
      },
    });
  },
};
