import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bottom-0 z-20 w-full border-t border-gray-200 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-4'>
          <div className='flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0'>
            <div className='text-center text-sm text-gray-500 sm:text-left'>
              © 2025 Kanboard. All rights reserved.
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
              <a href='#' className='text-sm text-gray-500 hover:text-gray-700'>
                Privacy Policy
              </a>
              <a href='#' className='text-sm text-gray-500 hover:text-gray-700'>
                Terms of Service
              </a>
              <a href='#' className='text-sm text-gray-500 hover:text-gray-700'>
                Contact
              </a>
              <div className='flex items-center whitespace-nowrap text-sm text-gray-500'>
                Made with <Heart className='mx-1 h-4 w-4 text-red-500' /> by
                Simón
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
