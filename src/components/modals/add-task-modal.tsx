'use client';
import AddTaskForm from '@/components/forms/add-task-form';
import Modal from '@/components/ui/modal';
import useHandleModal from '@/hooks/use-handle-modal';

export default function AddTaskModal() {
  const { isModalOpen, closeModal } = useHandleModal();

  return (
    <>
      {isModalOpen('addTaskModal') && (
        <Modal
          text={<h2 className='text-xl font-semibold'>Nueva tarea</h2>}
          closeModal={() => closeModal('addTaskModal')}
        >
          <AddTaskForm />
        </Modal>
      )}
    </>
  );
}
