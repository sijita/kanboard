import AddTaskButton from '@/components/add-task-button';
import ColumnsRows from '@/components/columns-rows';
import TaskModal from '@/components/task-modal';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <TaskModal />
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <h1 className="text-3xl font-bold text-gray-900">Kanboard</h1>
          <AddTaskButton />
        </div>
        <ColumnsRows />
      </div>
    </div>
  );
}
