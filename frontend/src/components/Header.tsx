import logo from '../assets/straven_logo.png'
import menu from '../assets/hamburger_menu.png'
import search from '../assets/search.png'
import settings from '../assets/settings.png'


const Header = () => {
  return (
    <>
      <nav className='flex justify-between items-center p-5'>
        <div className='flex items-center gap-5'>
          <h1 className='text-white text-3xl font-bold'>
            <span className='text-blue-600'>Str</span>
            aven
          </h1>
          <img 
            src={menu} 
            alt='Menu'
            className='w-8 h-8'
          />
        </div>

        <div className='flex items-center gap-2'>
          <img
            src={search} 
            alt='Search Icon'
            className='w-10 h-10'
          />
          <img 
            src={settings} 
            alt='Settings'
            className='w-10 h-10'
          />
        </div>
      </nav>
    </>
  )
}

export default Header