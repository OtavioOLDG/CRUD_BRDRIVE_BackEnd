require("dotenv").config();
const fastify = require("fastify")({ logger: true });
cors = require("@fastify/cors");

// Importação das rotas
const animalRoutes = require("./routes/animal.routes");
const zookeeperRoutes = require("./routes/zookeeper.routes");
const defaultRoutes = require("./routes/default.routes");

// Registro das rotas
fastify.register(defaultRoutes);
fastify.register(animalRoutes);
fastify.register(zookeeperRoutes);

// Inicialização do servidor
const start = async () => {
  try {
    await fastify.register(cors, {
      origin: "http://localhost:4000",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    });

    await fastify.listen({ port: 3000 });
    console.log(`Servidor rodando em http://localhost:3000 🚀`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
