import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import useHandleModal from './use-handle-modal';

export default function useHandleParams() {
  const { openModal } = useHandleModal();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { replace } = useRouter();

  const onOpenTask = (taskId: string) => {
    openModal('editTaskModal');
    params.set('id', taskId);

    replace(`${pathname}?${params.toString()}`);
  };

  const deleteParams = () => {
    if (params.has('id')) {
      params.delete('id');
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return {
    onOpenTask,
    searchParams,
    params,
    deleteParams,
  };
}
