import Dropdown from './Dropdown'
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
            <h1 className='text-white text-3xl font-bold cursor-pointer hover:scale-110'>
              <span className='text-blue-600'>Str</span>
              aven
            </h1>
          </Link>
        </div>

        <Dropdown />
      </nav>
    </>
  )
}

export default Header