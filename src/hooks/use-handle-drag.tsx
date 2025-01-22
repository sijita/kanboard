import useHandleTasks from './use-handle-tasks';
import type { Task, TaskStatus } from '@/types/task';
import toast from 'react-hot-toast';

export default function useHandleDrag({
  status,
  task,
}: {
  status?: TaskStatus;
  task?: Task;
}) {
  const { updateTaskStatus } = useHandleTasks();

  const handleDragStart = (e: React.DragEvent) => {
    if (task) e.dataTransfer.setData('taskId', task.id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent) => {
    if (!status) return;
    
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const res = await updateTaskStatus(taskId, status);

    if (res?.type === 'success') {
      toast.success(res?.message);
      return;
    } else {
      toast.error(res?.message);
      return;
    }
  };

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
  };
}
