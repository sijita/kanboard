'use client';
import EditTaskForm from '@/components/forms/edit-task-form';
import Modal from '@/components/ui/modal';
import useHandleModal from '@/hooks/use-handle-modal';

export default function EditTaskModal() {
  const { isModalOpen, closeModal } = useHandleModal();

  return (
    <>
      {isModalOpen('editTaskModal') && (
        <Modal
          text={<h2 className="text-xl font-semibold">Editar tarea</h2>}
          closeModal={() => closeModal('editTaskModal')}
        >
          <EditTaskForm />
        </Modal>
      )}
    </>
  );
}
