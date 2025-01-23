'use client';
import { ModalProvider } from '@/context/modal-context';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <Toaster />
      {children}
    </ModalProvider>
  );
}
