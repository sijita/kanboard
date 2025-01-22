'use client';
import { ModalContext } from '@/context/modal-context';
import { Plus } from 'lucide-react';
import { use } from 'react';

export default function AddTaskButton() {
  const { openModal } = use(ModalContext);

  return (
    <button
      onClick={openModal}
      className="max-[400px]:w-full max-[400px]:justify-center flex items-center gap-2 bg-[#baff30] text-black px-4 py-2 rounded-lg hover:bg-[#baff30]/80 transition-colors"
    >
      <Plus size={20} />
      Añadir tarea
    </button>
  );
}
