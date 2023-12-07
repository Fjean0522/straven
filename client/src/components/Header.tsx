import settings_btn from '../assets/settings.png'
import logout_btn from '../assets/logout.png'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { API_URL } from '../pages/Home'

type BgHeader = {
  bgOpacityClass?: string
}

const Header = ({ bgOpacityClass }: BgHeader) => {
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
        window.location.reload()
      }

    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 bg-black ${bgOpacityClass} flex justify-between items-center p-5 md:px-10 lg:px-14 `}>
        <div className='flex items-center gap-5'>
          <Link to='/'>
            <h1 className='text-white text-3xl font-bold cursor-pointer hover:scale-110'>
              <span className='text-blue-600'>Str</span>
              aven
            </h1>
          </Link>
        </div>

        <Dropdown />
        
        <div className='hidden lg:items-center lg:gap-2 lg:flex'>
          <div 
            className='flex items-center gap-1 text-white text-lg font-semibold px-4 rounded-xl cursor-pointer hover:scale-105'
            onClick={handleLogout}
          >
            <img 
              src={logout_btn} 
              alt="Logout button" 
              className='w-6 h-6'
            />
            Sign out
          </div>

          <Link to='/settings'>
            <img 
              src={settings_btn} 
              alt='Settings button'
              className='w-10 h-10 cursor-pointer hover:scale-105'
            />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header