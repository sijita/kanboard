import { z } from 'zod';

export const addTaskSchema = z.object({
  id: z.string(),
  title: z.string().min(3),
  description: z.string().min(5),
  status: z.enum(['pending', 'inprogress', 'completed']).default('pending'),
  assignedTo: z.string(),
  createdAt: z.string(),
});

export type AddTaskSchema = z.infer<typeof addTaskSchema>;
