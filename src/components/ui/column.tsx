import type { Task, TaskStatus } from '@/types/task';
import TaskCard from './task-card';
import useHandleDrag from '@/hooks/use-handle-drag';

type ColumnProps = {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  icon: React.ReactNode;
};

export default function Column({ title, status, tasks, icon }: ColumnProps) {
  const { handleDragOver, handleDrop } = useHandleDrag({ status });

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className='w-80 space-y-5 rounded-lg bg-gray-100 p-5'
    >
      <div className='flex items-center justify-between gap-2'>
        <h2 className='text-lg font-semibold text-gray-700'>{title}</h2>
        <div className='rounded-full bg-black/10 p-2'>{icon}</div>
      </div>
      {tasks && tasks?.length > 0 ? (
        <div className='space-y-3'>
          {tasks?.map((task) => <TaskCard key={task.id} task={task} />)}
        </div>
      ) : (
        <p className='text-sm text-gray-500'>No hay tareas en esta columna</p>
      )}
    </div>
  );
}
