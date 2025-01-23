import useHandleModal from './use-handle-modal';
import useHandleParams from './use-handle-params';
import useHandleTasks from './use-handle-tasks';
import toast from 'react-hot-toast';

export default function useDeleteTask() {
  const { isModalOpen, closeModal } = useHandleModal();
  const { deleteParams } = useHandleParams();
  const { deleteTask } = useHandleTasks();

  const onDeleteTask = async (taskId: string) => {
    deleteParams();
    const { type, message } = await deleteTask(taskId);

    if (type === 'success') {
      toast.success(message);
      closeModal('deleteTaskModal');
      return;
    } else {
      toast.error(message);
      closeModal('deleteTaskModal');
      return;
    }
  };

  const onCancelDelete = () => {
    deleteParams();
    closeModal('deleteTaskModal');
  };

  return {
    isModalOpen,
    onDeleteTask,
    closeModal,
    onCancelDelete,
  };
}
