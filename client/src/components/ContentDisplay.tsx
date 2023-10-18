import movie_1 from '../assets/movie_1.png'
import movie_2 from '../assets/movie_2.png'
import movie_3 from '../assets/movie_3.png' 
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ContentDisplay: React.FC = () => {
const [movies, setMovies] = useState([])

  return (
    <>
      <div className="text-white font-bold flex justify-between p-6 md:justify-evenly md:text-lg md:mb-5">
        <h2 className="hover:text-blue-600 cursor-pointer">Action</h2>
        <h2 className="hover:text-blue-600 cursor-pointer">Comedy</h2>
        <h2 className="hover:text-blue-600 cursor-pointer">Thriller</h2>
        <h2 className="hover:text-blue-600 cursor-pointer">Horror</h2>
      </div>

      <div className="text-white font-semibold text-base flex justify-evenly gap-4 p-2 md:px-7">
        <Link 
          to='/play'
          className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
          <img 
            src={movie_1} 
            alt="Movie Thumbnail" 
            className='hover:border hover:border-blue-400'
          />
          <h1>Prism</h1>
        </Link>

        <Link 
          to='/play' 
          className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
          <img 
            src={movie_2} 
            alt="Movie Thumbnail"
            className='hover:border hover:border-blue-400' 
          />
          <h1>Forever Abyss</h1>
        </Link>

        <Link 
          to='/play'
          className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
          <img 
            src={movie_3} 
            alt="Movie Thumbnail"
            className='hover:border hover:border-blue-400' 
          />
          <h1>The Haunting</h1>
        </Link>
      </div>
    </>
  )
}

export default ContentDisplay