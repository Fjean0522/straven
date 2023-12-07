import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import menu from '../assets/hamburger_menu.png'
import { Link } from 'react-router-dom'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left lg:hidden">
      <div>
        <Menu.Button>
          <img 
            src={menu} 
            alt='Menu'
            className='w-8 h-8 mt-3'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black font-semibold focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/settings'
                  className={classNames(
                    active ? 'bg-blue-500 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item>
           
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'bg-blue-500 text-white' : 'text-white',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown