import movie_1 from '../assets/movie_1.png'
import movie_2 from '../assets/movie_2.png'
import movie_3 from '../assets/movie_3.png' 
import { Link } from 'react-router-dom'

const ContentDisplay = () => {


  return (
    <div className="text-white font-semibold text-base flex justify-evenly gap-4 p-2 md:px-7">
      <Link 
        to='/play'
        className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
        <img 
          src={movie_1} 
          alt="Movie Thumbnail" 
        />
        <h1>Prism</h1>
      </Link>

      <Link 
        to='/play' 
        className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
        <img 
          src={movie_2} 
          alt="Movie Thumbnail" 
        />
        <h1>Forever Abyss</h1>
      </Link>

      <Link 
        to='/play'
        className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
        <img 
          src={movie_3} 
          alt="Movie Thumbnail" 
        />
        <h1>The Haunting</h1>
      </Link>
    </div>
  )
}

export default ContentDisplay