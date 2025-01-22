'use client';
import { ModalContext } from '@/context/modal-context';
import { use } from 'react';
import TaskForm from './task-form';
import Modal from './ui/modal';

export default function TaskModal() {
  const { isModalOpen, closeModal } = use(ModalContext);

  return (
    <>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <TaskForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
