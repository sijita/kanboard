import Input from '@/components/ui/input';
import TextArea from '@/components/ui/text-area';
import Select from '@/components/ui/select';
import Button from '@/components/ui/button';
import useAddTaskForm from '@/hooks/use-add-task-form';

export default function AddTaskForm() {
  const { users, submitAction } = useAddTaskForm();

  return (
    <form action={submitAction}>
      <div className='space-y-4'>
        <Input name='title' label='Título' minLength={3} required />
        <TextArea
          name='description'
          label='Descripción'
          minLength={5}
          required
        />
        <Select
          name='assignedTo'
          label='Asignado a'
          options={users}
          defaultValue={''}
          required
        />
      </div>
      <div className='mt-5 flex justify-end gap-3'>
        <Button
          text='Crear tarea'
          type='submit'
          className='w-full rounded-md bg-[#baff30] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#baff30]/80'
        />
      </div>
    </form>
  );
}
