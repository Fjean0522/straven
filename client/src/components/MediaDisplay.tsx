import { Movie } from '../pages/Home'
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel'
import responsive from '../config/carouselConfig';
import "react-multi-carousel/lib/styles.css";

type moviesProp = {
  movies: Movie[]
}

const MediaDisplay = ({ movies }: moviesProp) => {

  return (
    <>
      {
        movies.length > 0 ? (
          <Carousel 
            className='flex justify-center pt-2 pb-5 md:px-7'
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            >
            {
              movies.map(movie => (
                <Link 
                  to={`/play/${movie.title}`}
                  className='text-white font-semibold text-base flex flex-col items-center gap-2 h-full mx-1 mt-6
                  hover:cursor-pointer hover:-translate-y-2 transition-transform duration-300 ease-in md:mt-0'
                  key={movie._id} 
                  >
                  <img 
                    className='hover:border hover:border-blue-400 rounded-md h-full w-full'
                    src={movie.imageUrl} 
                    alt={movie.title + 'Thumbnail'} 
                  />
                  <h1>{movie.title}</h1>
                </Link>
              ))
            }
          </Carousel>
        ) : <p>Loading Movies...</p>
      }
    </>
  )
}

export default MediaDisplay