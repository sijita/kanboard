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
          text={<h2 className='text-xl font-semibold'>Eliminar tarea</h2>}
          closeModal={() => closeModal('deleteTaskModal')}
        >
          <div className='flex flex-col gap-6'>
            <div className='space-y-1'>
              <h3 className='text-lg font-semibold'>
                ¿Seguro que quieres eliminar la tarea?
              </h3>
              <p className='text-sm text-gray-500'>
                Esta acción no se puede deshacer
              </p>
            </div>
            <div className='space-y-2'>
              <Button
                text='Eliminar'
                type='button'
                icon={<Trash2 size={17} />}
                onClick={() => onDeleteTask(taskId)}
                className='w-full border border-red-300 font-medium text-red-700 hover:bg-red-500 hover:text-white'
              />
              <Button
                text='Cancelar'
                type='button'
                className='w-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200'
                onClick={onCancelDelete}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
