import menu from '../assets/hamburger_menu.png'
import search from '../assets/search.png'
import settings from '../assets/settings.png'


const Header = () => {


  
  return (
    <>
      <nav className='sticky top-0 z-50 bg-black bg-opacity-50 flex justify-between items-center p-5 md:px-10 lg:px-14'>
        <div className='flex items-center gap-5'>
          <h1 className='text-white text-3xl font-bold'>
            <span className='text-blue-600'>Str</span>
            aven
          </h1>
        </div>

        <div className='lg:hidden'>
          <img 
            src={menu} 
            alt='Menu'
            className='w-8 h-8'
          />
        </div>

        <div className='hidden lg:flex lg:gap-20 lg:text-white lg:text-xl lg:font-bold'>
          <h2 className='hover:text-blue-600 cursor-pointer'>Movies</h2>
          <h2 className='hover:text-blue-600 cursor-pointer'>Series</h2>
        </div>

        <div className='hidden lg:flex lg:items-center lg:gap-2' >
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
