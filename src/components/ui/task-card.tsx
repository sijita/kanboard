import type { Task } from '@/types/task';
import { Calendar } from 'lucide-react';
import useHandleTasks from '@/hooks/use-handle-tasks';
import useHandleDrag from '@/hooks/use-handle-drag';
import useHandleParams from '@/hooks/use-handle-params';
import { motion } from 'framer-motion';

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const { onOpenTask } = useHandleParams();
  const { handleDragStart } = useHandleDrag({ task });
  const { users } = useHandleTasks();
  const assignedUser = users?.find(
    (u) => Number(u?.id) === Number(task?.assignedTo),
  );

  return (
    <motion.button
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      draggable
      onDragStart={(e) => handleDragStart(e as unknown as React.DragEvent)}
      className='mb-3 w-full cursor-move space-y-3 rounded-lg bg-white p-4 text-start shadow-sm transition-shadow hover:shadow-md'
      onClick={() => onOpenTask(task?.id)}
    >
      <div className='flex w-full flex-wrap-reverse items-center justify-between gap-3'>
        <div className='flex items-center gap-2'>
          {assignedUser?.avatar && (
            <img
              src={assignedUser.avatar}
              alt={assignedUser.name}
              className='h-6 w-6 rounded-full'
            />
          )}
          <span className='text-sm'>{assignedUser?.name}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Calendar className='text-gray-500' size={13} />
          <span className='text-xs text-gray-500'>{task.createdAt}</span>
        </div>
      </div>
      <div className='space-y-1'>
        <h3 className='font-semibold text-gray-800'>{task.title}</h3>
        <p className='pl-1 text-sm text-gray-600'>{task.description}</p>
      </div>
    </motion.button>
  );
}
