import { Layout, Bell, Settings, Search } from 'lucide-react';

export function Navbar() {
  return (
    <nav className='top-0 z-30 w-full border-b border-gray-200 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-5 max-sm:py-5 sm:h-16 sm:flex-row'>
          <div className='flex items-center'>
            <Layout size={20} color='#baff30' />
            <span className='ml-2 text-xl font-semibold text-gray-800'>
              Kanboard
            </span>
          </div>
          <div className='flex flex-1 items-center justify-center px-5 sm:px-8'>
            <div className='w-full max-w-lg'>
              <div className='relative'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <Search className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  className='block w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-[#baff30] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#baff30] sm:text-sm'
                  placeholder='Buscar tarea...'
                  type='search'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <button className='text-gray-500 hover:text-gray-700'>
              <Bell size={20} />
            </button>
            <button className='text-gray-500 hover:text-gray-700'>
              <Settings size={20} />
            </button>
            <div className='flex items-center'>
              <img
                className='h-8 w-8 rounded-full'
                src='https://api.dicebear.com/9.x/big-smile/svg?seed=Jade'
                alt='Profile'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
