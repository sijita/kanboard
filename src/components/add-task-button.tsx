'use client';
import useHandleModal from '@/hooks/use-handle-modal';
import { Plus } from 'lucide-react';
import Button from './ui/button';

export default function AddTaskButton() {
  const { openModal } = useHandleModal();

  return (
    <Button
      onClick={() => openModal('addTaskModal')}
      className='flex items-center gap-2 bg-[#baff30] text-black transition-colors hover:bg-[#baff30]/80 max-[400px]:w-full max-[400px]:justify-center'
      text='Añadir'
      icon={<Plus size={20} />}
    />
  );
}
