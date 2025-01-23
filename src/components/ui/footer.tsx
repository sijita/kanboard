import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 bottom-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-500 text-sm text-center sm:text-left">
              © 2025 Kanboard. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Contact
              </a>
              <div className="flex items-center text-gray-500 text-sm whitespace-nowrap">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by
                Simón
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
