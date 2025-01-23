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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-[99]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring' }}
        className="bg-white rounded-lg p-6 w-full max-w-md space-y-5"
      >
        <div className="flex justify-between items-center">
          {text}
          <button
            onClick={() => {
              deleteParams();
              closeModal();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
