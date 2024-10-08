import { db } from "./firebaseConnection";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export interface TaskProps {
  id?: string;
  title: string;
  completed: boolean;
  userId: string;
}

// Instanciando uma coleção
const taskColletion = collection(db, "tasks");


// Função que cria uma task no banco de dados
export const addTask = async (task: {
  title: string;
  completed: boolean;
  userId: string;
}) => {
  try {
    const docRef = await addDoc(taskColletion, task);
    return { id: docRef.id, ...task };
  } catch (error) {
    throw new Error(`Erro ao cadastrar tarefa: ${error}`);
  }
};

// Função que lista as tarefas presentes no banco de dados
export const getTasks = async () => {
  try {
    const snapshot = await getDocs(taskColletion);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(`Erro ao listar tarefas: ${error}`);
  }
};

// Função que atualiza uma tarefa em específico
export const updateTask = async (
  id: string,
  updates: {
    title?: string;
    completed?: boolean;
  }
) => {
  try {
    const taskDoc = doc(taskColletion, id);
    updateDoc(taskDoc, updates);
  } catch (error) {
    throw new Error(`Erro ao atualizar tarefa: ${error}`);
  }
};

// Função que deleta uma tarefa em específico do banco de dados
export const deleteTask = async (id: string) => {
  try {
    const taskDoc = doc(taskColletion, id);
    deleteDoc(taskDoc);
  } catch (error) {
    throw new Error(`Erro ao deletar task: ${error}`);
  }
};
