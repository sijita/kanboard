import useHandleTasks from './use-handle-tasks';
import type { Task } from '@/types/task';
import toast from 'react-hot-toast';
import useHandleModal from './use-handle-modal';

export default function useAddTaskForm() {
  const { users, addTask } = useHandleTasks();
  const { closeModal } = useHandleModal();

  const submitAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);

    const { type, message } = await addTask(data as unknown as Task);

    if (type === 'success') {
      closeModal('addTaskModal');
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return {
    submitAction,
    users,
    closeModal,
  };
}
