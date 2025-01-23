import Input from '../ui/input';
import TextArea from '../ui/text-area';
import Select from '../ui/select';
import Button from '../ui/button';
import useEditTaskForm from '@/hooks/use-edit-task-form';
import { LoaderCircle, Trash2 } from 'lucide-react';
import useHandleModal from '@/hooks/use-handle-modal';

export default function EditTaskForm() {
  const { openModal } = useHandleModal();
  const { submitAction, users, closeModal, taskToEdit } = useEditTaskForm();

  if (!taskToEdit)
    return (
      <div className="flex items-center justify-center">
        <LoaderCircle className="animate-spin" color="#baff30" size={40} />
      </div>
    );

  return (
    <form action={submitAction}>
      <div className="space-y-4">
        <Input
          name="title"
          label="Título"
          defaultValue={taskToEdit?.title}
          min={3}
          required
        />
        <TextArea
          name="description"
          label="Descripción"
          defaultValue={taskToEdit?.description}
          minLength={5}
          required
        />
        {taskToEdit?.assignedTo && (
          <Select
            name="assignedTo"
            label="Asignado a"
            options={users}
            defaultValue={taskToEdit?.assignedTo}
            required
          />
        )}
      </div>
      <div className="mt-5 flex justify-end gap-3">
        <Button
          text=""
          type="button"
          icon={<Trash2 size={17} />}
          onClick={() => {
            closeModal('editTaskModal');
            openModal('deleteTaskModal');
          }}
          className="text-gray-400 hover:text-red-500 transition-colors p-4 rounded-full hover:bg-red-50"
        />
        <Button
          text="Guardar"
          type="submit"
          className="px-4 py-2 text-sm font-medium text-black bg-[#baff30] rounded-md hover:bg-[#baff30]/80 transition-colors w-full"
        />
      </div>
    </form>
  );
}
