import { useState } from 'react'
import { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import responsive from '../config/carouselConfig';
import "react-multi-carousel/lib/styles.css";

type Movie = {
  _id: string,
  title: string,
  description: string,
  category: string,
  duration: string,
  rating: string,
  imageUrl: string,
  videoUrl: string
}


const MediaDisplay = () => {
  const [category, setCategory] = useState<string>('')
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const getByCategory = async () => {
      try {
        if (category) {
          const response = await fetch(`api/movies/category/${category}`)
          const data = await response.json()
          setMovies(data)
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    getByCategory()
    
  }, [category])

  return (
    <>
      {/* <div className="text-white font-bold flex justify-between p-6 md:justify-evenly md:text-lg md:mb-5">
        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Action')}
          >
          Action
        </button>

        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Comedy')}
          >
          Comedy
        </button>

        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Thriller')}
          >
          Thriller
        </button>

        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Horror')}
          >
          Horror
        </button>
      </div> */}

      {
        movies.length > 0 ? (
          <Carousel 
            className="flex justify-center pt-2 pb-5 md:px-7"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            >
            {
              movies.map(movie => (
                <div 
                  className='text-white font-semibold text-base flex flex-col items-center gap-2 h-full mx-1
                  hover:cursor-pointer hover:-translate-y-2 transition-transform duration-300 ease-in'
                  key={movie._id} 
                  >
                  <img 
                    className='hover:border hover:border-blue-400 h-full w-full'
                    src={movie.imageUrl} 
                    alt={movie.title + 'Thumbnail'} 
                  />
                  <h1>{movie.title}</h1>
                </div>
              ))
            }
          </Carousel>
        ) : (<p>Loading Movies...</p>)
      }
    </>
  )
}

export default MediaDisplay
