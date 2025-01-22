import { z } from 'zod';

export const addTaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(['pending', 'inprogress', 'completed']).default('pending'),
  assignedTo: z.number(),
  createdAt: z.string(),
});

export type AddTaskSchema = z.infer<typeof addTaskSchema>;
