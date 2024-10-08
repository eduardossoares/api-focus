import express from "express";
import {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../services/taskService";

const router = express.Router();

// Rota para adicionar uma nova tarefa
router.post("/tasks", async (req, res) => {
  const { title, completed, userId } = req.body;
  try {
    const newTask = await addTask({ title, completed, userId });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: `Erro ao criar tarefa: ${error}` });
  }
});

// Rota para listar todas as tarefas
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: `Erro ao obter tarefas: ${error}` });
  }
});

// Rota para atualizar uma tarefa
router.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    await updateTask(id, updates);
    res.status(200).json({ message: "Tarefa atualizada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: `Erro ao atualizar tarefa: ${error}` });
  }
});

// Rota para excluir uma tarefa
router.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTask(id);
    res.status(200).json({ message: "Tarefa excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ message: `Erro ao excluir tarefa: ${error}` });
  }
});

export default router;
