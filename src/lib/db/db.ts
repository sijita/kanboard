import { openDB } from 'idb';
import type { Task } from '@/types/task';
import type { User } from '@/types/user';

const DB_NAME = 'kanboard-db';
const DB_VERSION = 1;

export async function initDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore('tasks', { keyPath: 'id' });
      db.createObjectStore('users', { keyPath: 'id' });
    },
  });
  return db;
}

export async function getAllTasks() {
  const db = await initDB();
  return db.getAll('tasks');
}

export async function getAllUsers() {
  const db = await initDB();
  return db.getAll('users');
}

export async function saveTask(task: Task) {
  const db = await initDB();
  return db.put('tasks', task);
}

export async function deleteTask(taskId: string) {
  const db = await initDB();
  return db.delete('tasks', taskId);
}

export async function saveUser(user: User) {
  const db = await initDB();
  return db.put('users', user);
}
