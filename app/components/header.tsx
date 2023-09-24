import { useState } from 'react';
import { Dialog } from '@headlessui/react';

import Modal from './modal';
import { Bars3Icon, StarIcon} from '@heroicons/react/24/outline';
import SearchIcon from '@mui/icons-material/Search';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-base-200 text-base-content shadow-md relative z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center space-x-4">
          <a href="https://i.postimg.cc/ZnrjJt55/named-ai-suite.png" className="text-base-content text-lg font-semibold">
            AI.SUITE
          </a>          
        </div>
        <div className="hidden lg:flex lg:space-x-4">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-base-content hover:text-base-content">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="mr-4"
            onClick={() => setIsModalOpen(true)}
          >
            <StarIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lg:hidden p-2 text-base-content"
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
            <a href="#" className="text-base-content text-lg font-semibold">
              Your Logo
            </a>
            <button
              type="button"
              className="p-2 text-base-content"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-base-content hover:text-base-content-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}