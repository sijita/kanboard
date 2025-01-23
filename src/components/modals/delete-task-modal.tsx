'use client';
import Modal from '@/components/ui/modal';
import Button from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import useDeleteTask from '@/hooks/use-delete-task';

export default function DeleteTaskModal({ taskId }: { taskId: string }) {
  const { isModalOpen, closeModal, onDeleteTask, onCancelDelete } =
    useDeleteTask();

  return (
    <>
      {isModalOpen('deleteTaskModal') && (
        <Modal
          text={<h2 className="text-xl font-semibold">Eliminar tarea</h2>}
          closeModal={() => closeModal('deleteTaskModal')}
        >
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                ¿Seguro que quieres eliminar la tarea?
              </h3>
              <p className="text-sm text-gray-500">
                Esta acción no se puede deshacer
              </p>
            </div>
            <div className="space-y-2 mt-5">
              <Button
                text="Eliminar"
                type="button"
                icon={<Trash2 size={17} />}
                onClick={() => onDeleteTask(taskId)}
                className="text-red-700 hover:text-white border border-red-300 hover:bg-red-500 font-medium w-full"
              />
              <Button
                text="Cancelar"
                type="button"
                className="text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 w-full"
                onClick={onCancelDelete}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
