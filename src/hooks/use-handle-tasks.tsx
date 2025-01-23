import type { Task } from '@/types/task';
import type { User } from '@/types/user';
import * as db from '@/lib/db/db';
import useSWR from 'swr';
import axios from '@/lib/axios';
import { v4 as uuidv4 } from 'uuid';
import { addTaskSchema } from '@/schemas/add-task-schema';

export default function useHandleTasks() {
  const { data: tasks = [], mutate: mutateTasks } = useSWR<Task[]>(
    'tasks',
    async () => {
      const storedTasks = await db.getAllTasks();
      if (storedTasks?.length) return storedTasks;

      const { data: fetchedTasks } = await axios.get('/tasks');
      await Promise.all(fetchedTasks.map((task: Task) => db.saveTask(task)));

      return fetchedTasks;
    }
  );

  const { data: users = [] } = useSWR<User[]>('users', async () => {
    const storedUsers = await db.getAllUsers();
    if (storedUsers?.length) return storedUsers;

    const { data: fetchedUsers } = await axios.get('/users');
    await Promise.all(fetchedUsers.map((user: User) => db.saveUser(user)));

    return fetchedUsers;
  });

  const addTask = async (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    try {
      const newTask: Task = {
        ...taskData,
        id: uuidv4(),
        assignedTo: taskData.assignedTo,
        createdAt: new Date().toLocaleDateString(undefined, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
      };

      const parsedTask = addTaskSchema.safeParse(newTask);

      if (!parsedTask.success) {
        const errorMessages = Object.entries(
          parsedTask.error.flatten().fieldErrors
        )
          .map(([field, errors]) => `${field}: ${errors.join(', ')}`)
          .join('. ');

        return {
          type: 'error',
          message: errorMessages ?? 'Error de validacion',
        };
      }

      const task = parsedTask.data;

      await db.saveTask(task);
      mutateTasks((prev = []) => [...prev, task], false);

      return {
        type: 'success',
        message: 'Tarea creada con exito',
      };
    } catch {
      return {
        type: 'error',
        message: 'Error al crear la tarea',
      };
    }
  };

  const updateTaskStatus = async (
    taskId: string,
    status: Task['status']
  ): Promise<{ type: 'success' | 'error'; message: string } | undefined> => {
    try {
      const taskIndex = tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return;

      const updatedTask = { ...tasks[taskIndex], status };
      await db.saveTask(updatedTask);

      mutateTasks(
        (prev) =>
          prev?.map((task) =>
            task.id === taskId ? { ...task, status } : task
          ),
        false
      );

      return {
        type: 'success',
        message: 'Tarea actualizada con exito',
      };
    } catch {
      return {
        type: 'error',
        message: 'Error al actualizar la tarea',
      };
    }
  };

  const editTask = async (editedTask: Task) => {
    try {
      const taskIndex = tasks.findIndex((t) => t.id === editedTask.id);
      if (taskIndex === -1) return;

      const parsedTask = addTaskSchema.safeParse(editedTask);

      if (!parsedTask.success) {
        const errorMessages = Object.entries(
          parsedTask.error.flatten().fieldErrors
        )
          .map(([field, errors]) => `${field}: ${errors.join(', ')}`)
          .join('. ');

        return {
          type: 'error',
          message: errorMessages ?? 'Error de validacion',
        };
      }

      const task = parsedTask.data;
      const updatedTask = { ...tasks[taskIndex], ...task };

      await db.saveTask(updatedTask);
      mutateTasks(
        (prev = []) =>
          prev.map((task) => (task.id === editedTask.id ? updatedTask : task)),
        false
      );

      return { type: 'success', message: 'Tarea actualizada con exito' };
    } catch {
      return { type: 'error', message: 'Error al actualizar la tarea' };
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      await db.deleteTask(taskId);

      mutateTasks((prev) => prev?.filter((task) => task.id !== taskId), false);

      return { type: 'success', message: 'Tarea eliminada con exito' };
    } catch {
      return { type: 'error', message: 'Error al eliminar la tarea' };
    }
  };

  return {
    tasks,
    users,
    addTask,
    editTask,
    updateTaskStatus,
    deleteTask,
  };
}
