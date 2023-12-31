import menu from '../assets/hamburger_menu.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../pages/Home'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_URL}/users/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (response.ok) {
        localStorage.removeItem('user')
        
        // Will load to login page
        navigate('/')
        window.location.reload()
      }

    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
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
        <Menu.Items className="absolute right-0 z-10 origin-top-right bg-black font-semibold cursor-pointer rounded-md mt-2 w-56">
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

            {/* <Menu.Item>
              {({ active }) => (
                <Link
                  to='/watchlist'
                  className={classNames(
                    active ? 'bg-blue-500 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Watch List
                </Link>
              )}
            </Menu.Item> */}
           
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-blue-500 text-white' : 'text-white',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                  onClick={handleLogout}
                >
                  Sign out
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown