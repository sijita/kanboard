import type { Task } from '@/types/task';
import { Calendar } from 'lucide-react';
import useHandleTasks from '@/hooks/use-handle-tasks';
import useHandleDrag from '@/hooks/use-handle-drag';

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const { handleDragStart } = useHandleDrag({ task });
  const { users } = useHandleTasks();
  const assignedUser = users?.find(
    (u) => Number(u?.id) === Number(task?.assignedTo)
  );

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-white rounded-lg shadow-sm p-4 mb-3 cursor-move hover:shadow-md transition-shadow space-y-3"
    >
      <div className="flex w-full items-center justify-between gap-3 flex-wrap-reverse">
        <div className="flex items-center gap-2">
          {assignedUser?.avatar && (
            <img
              src={assignedUser.avatar}
              alt={assignedUser.name}
              className="w-6 h-6 rounded-full"
            />
          )}
          <span className="text-sm">{assignedUser?.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="text-gray-500" size={13} />
          <span className="text-xs text-gray-500">
            {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-600 pl-1">{task.description}</p>
      </div>
    </div>
  );
}
