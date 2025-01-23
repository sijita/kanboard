import { Layout, Bell, Settings, Search } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 w-full z-30 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 justify-between sm:h-16 max-sm:py-5">
          <div className="flex items-center">
            <Layout size={20} color="#baff30" />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Kanboard
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center sm:px-8 px-5">
            <div className="max-w-lg w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#baff30] focus:border-[#baff30] sm:text-sm"
                  placeholder="Buscar tarea..."
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Settings size={20} />
            </button>
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://api.dicebear.com/9.x/big-smile/svg?seed=Jade"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
