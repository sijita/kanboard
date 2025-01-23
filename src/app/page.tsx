import AddTaskButton from '@/components/add-task-button';
import ColumnsRows from '@/components/columns-rows';
import AddTaskModal from '@/components/modals/add-task-modal';
import EditTaskModal from '@/components/modals/edit-task-modal';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <AddTaskModal />
      <EditTaskModal />
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <h1 className="text-3xl font-bold text-gray-900">Tareas</h1>
          <AddTaskButton />
        </div>
        <ColumnsRows />
      </div>
    </div>
  );
}
