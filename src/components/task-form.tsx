import useHandleTasks from '@/hooks/use-handle-tasks';
import toast from 'react-hot-toast';
import type { Task } from '@/types/task';

export default function TaskForm({ closeModal }: { closeModal: () => void }) {
  const { users, addTask } = useHandleTasks();

  const submitAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const { type, message } = await addTask(
      data as unknown as Omit<Task, 'id' | 'createdAt'>
    );

    if (type === 'success') {
      closeModal();
      toast.success(message);
      return;
    } else {
      toast.error(message);
      return;
    }
  };

  return (
    <form action={submitAction}>
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Titulo
          </label>
          <input
            name="title"
            type="text"
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#baff30] focus:ring-[#baff30] py-2 px-3"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            name="description"
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#baff30] focus:ring-[#baff30]"
            rows={3}
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Asignado a
          </label>
          <select
            name="assignedTo"
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#baff30] focus:ring-[#baff30] bg-white px-4 py-2"
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-3">
        <button
          type="button"
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-black bg-[#baff30] rounded-md hover:bg-[#baff30]/80 transition-colors"
        >
          Crear tarea
        </button>
      </div>
    </form>
  );
}
