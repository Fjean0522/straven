import menu from '../assets/hamburger_menu.png'
import search from '../assets/search.png'
import settings from '../assets/settings.png'
import { Link } from 'react-router-dom'

type BgHeader = {
  bgOpacityClass?: string
}

const Header = ({ bgOpacityClass }: BgHeader) => {

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 bg-black ${bgOpacityClass} flex justify-between items-center p-5 md:px-10 lg:px-14 `}>
        <div className='flex items-center gap-5'>
          <Link to='/'>
            <h1 className='text-white text-3xl font-bold cursor-pointer'>
              <span className='text-blue-600'>Str</span>
              aven
            </h1>
          </Link>
        </div>

        <div className='lg:hidden'>
          <img 
            src={menu} 
            alt='Menu'
            className='w-8 h-8'
          />
        </div>

        <div className='items-center gap-2 hidden lg:flex' >
          <img
            src={search} 
            alt='Search Icon'
            className='w-10 h-10 cursor-pointer'
          />
          <img 
            src={settings} 
            alt='Settings'
            className='w-10 h-10 cursor-pointer'
          />
        </div>
      </nav>
    </>
  )
}

export default Header