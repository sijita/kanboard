import useHandleTasks from './use-handle-tasks';
import useHandleModal from './use-handle-modal';
import useHandleParams from './use-handle-params';
import toast from 'react-hot-toast';
import type { Task } from '@/types/task';

export default function useEditTaskForm() {
  const { deleteParams, params } = useHandleParams();
  const { users, tasks, editTask } = useHandleTasks();
  const { closeModal } = useHandleModal();
  const taskId = params.get('id') ?? '';

  const taskToEdit = tasks.find((task) => task.id === taskId);

  const submitAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);

    const res = await editTask({ ...taskToEdit, ...data } as unknown as Task);

    if (res?.type === 'success') {
      deleteParams();
      closeModal('editTaskModal');
      toast.success(res.message);
    } else {
      toast.error(res?.message);
    }
  };

  return {
    submitAction,
    users,
    taskToEdit,
    closeModal,
    deleteParams,
  };
}
