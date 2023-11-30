import play_btn from '../assets/play_btn.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Movie } from '../pages/Home'
import { mediaDefault } from '../pages/Play'

type BgImage = {
  backgroundImage: string,
  backgroundSize: string,
  backgroundPosition: string,
  backgroundRepeat: string
}

const Hero = () => {
  const [movie, setMovie] = useState<Movie>(mediaDefault)
  const [heroImage, setHeroImage] = useState<BgImage>({
    // Movie display styles
    backgroundImage: `url()`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  })
  
  const API_URL: string = import.meta.env.VITE_API_URL

  // Fetch random movie to display
  useEffect(() => {
    fetch(`${API_URL}/movies/randomMovie`)
      .then(response => response.json())
      .then(data => {
        setMovie(data[0])
        setHeroImage({
          backgroundImage: `url(${data[0].imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        })
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div 
      className='p-6 h-72 md:h-96' 
      style={heroImage}
    >
      <div className='flex flex-col justify-center min-h-full min-w-full bg-black bg-opacity-40 rounded-xl px-6 lg:ml-3'>
        {/* Movie details */}
        <div className='max-w-xs md:max-w-md lg:max-w-lg'>
          <h2 className='text-white text-xl font-bold lg:text-2xl'>{movie.title}</h2>
          <div className='flex gap-3'>
            <p className='text-white mb-3'>{movie.rating}</p>
            <p className='text-white mb-3'>{movie.duration}</p>
          </div>
          <p className='text-white mb-3'>{movie.description}</p>
        </div>

        {/* Movie play button */}
        <Link
          to={`/play/${movie.title}`}
          className='bg-white flex items-center justify-center gap-2 text-lg font-bold w-28 p-2 rounded-xl cursor-pointer hover:scale-105'>
          <img
            src={play_btn} 
            alt="Play Button" 
            className='w-6'
          />
          Play
        </Link>
      </div>
    </div>
  )
}

export default Hero