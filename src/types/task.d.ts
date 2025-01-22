export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'inprogress' | 'completed';
  assignedTo: string;
  createdAt: string;
};

export type TaskStatus = Task['status'];
