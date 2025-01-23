import useHandleParams from '@/hooks/use-handle-params';
import { X } from 'lucide-react';

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

export default function Modal({ children, closeModal }: ModalProps) {
  const { deleteParams } = useHandleParams();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5">
      <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Nueva tarea</h2>
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
      </div>
    </div>
  );
}
