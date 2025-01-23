import useHandleParams from '@/hooks/use-handle-params';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ModalProps {
  children: React.ReactNode;
  text: React.ReactNode;
  closeModal: () => void;
}

export default function Modal({ children, text, closeModal }: ModalProps) {
  const { deleteParams } = useHandleParams();

  return (
    <div className='fixed inset-0 z-[99] flex items-center justify-center bg-black/50 p-5'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring' }}
        className='w-full max-w-md space-y-5 rounded-lg bg-white p-6'
      >
        <div className='flex items-center justify-between'>
          {text}
          <button
            onClick={() => {
              deleteParams();
              closeModal();
            }}
            className='text-gray-500 hover:text-gray-700'
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
