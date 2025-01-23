import { ModalContext } from '@/context/modal-context';
import { use } from 'react';

export default function useHandleModal() {
  const { isModalOpen, openModal, closeModal } = use(ModalContext);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
}
