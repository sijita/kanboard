import { createContext, useState, ReactNode } from 'react';

interface ModalContextProps {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  isModalOpen: (modalName: string) => boolean;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openModals, setOpenModals] = useState<Set<string>>(new Set());

  const openModal = (modalName: string) => {
    setOpenModals((prev) => new Set(prev).add(modalName));
  };

  const closeModal = (modalName: string) => {
    setOpenModals((prev) => {
      const updated = new Set(prev);
      updated.delete(modalName);
      return updated;
    });
  };

  const isModalOpen = (modalName: string) => openModals.has(modalName);

  return (
    <ModalContext value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext>
  );
};
