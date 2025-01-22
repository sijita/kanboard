'use client';
import { Check, Clock, Rocket } from 'lucide-react';
import Column from './ui/column';
import useHandleTasks from '@/hooks/use-handle-tasks';

export default function ColumnsRows() {
  const { tasks } = useHandleTasks();

  return (
    <div className="flex items-start gap-6 overflow-x-auto">
      <Column
        title="Pendiente"
        status="pending"
        tasks={tasks?.filter((t) => t.status === 'pending')}
        icon={<Clock size={15} color="red" />}
      />
      <Column
        title="En progreso"
        status="inprogress"
        tasks={tasks?.filter((t) => t.status === 'inprogress')}
        icon={<Rocket size={15} color="blue" />}
      />
      <Column
        title="Completadas"
        status="completed"
        tasks={tasks?.filter((t) => t.status === 'completed')}
        icon={<Check size={15} color="green" />}
      />
    </div>
  );
}
