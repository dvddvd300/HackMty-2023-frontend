import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-900 text-lg font-semibold">
            Your Logo
          </a>
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:space-x-4">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <a href="#" className="mr-4">
            <img className="h-8 w-auto" src="/staticcontent/icons8-search-188.png" alt="Search" />
          </a>
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full max-w-xs overflow-y-auto bg-white shadow-md">
          <div className="flex justify-between items-center p-4">
            <a href="#" className="text-gray-900 text-lg font-semibold">
              Your Logo
            </a>
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
