import { useState } from 'react'
import { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1281 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1280, min: 769 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 768, min: 481 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 2
  }
};

const MediaDisplay: React.FC = () => {
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
      <div className="text-white font-bold flex justify-between p-6 md:justify-evenly md:text-lg md:mb-5">
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
      </div>

      {
        movies.length > 0 ? (
          <Carousel 
            className="text-white font-semibold text-base flex justify-evenly gap-4 p-2 md:px-7"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            >
            {
              movies.map(movie => (
                <div key={movie._id} className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
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
