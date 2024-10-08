import cors from "cors";
import express from "express";

import taskRoutes from "./routes/taskRoutes";

// Instanciando o Express para definir as rotas
const app = express();
// Definindo a porta do servidor
const PORT = 3001;

// Adiciona o cors e permite que a aplicação aceite requisições de outros domínios
app.use(cors());
// Permite que o servidor entenda dados em JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Criando uma rota para a manipulação de tasks
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta em http://localhost:${PORT}/`);
});
