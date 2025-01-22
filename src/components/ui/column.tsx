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
      className="bg-gray-100 rounded-lg p-5 w-80 space-y-5"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
        <button className="p-2 bg-black/10 rounded-full">{icon}</button>
      </div>
      {tasks && tasks.length > 0 ? (
        <div className="space-y-3">
          {tasks?.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No hay tareas en esta columna</p>
      )}
    </div>
  );
}
