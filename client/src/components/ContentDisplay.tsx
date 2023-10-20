import { useState } from 'react'
import { useEffect } from 'react'


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

const ContentDisplay: React.FC = () => {
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
          <div className="text-white font-semibold text-base flex justify-evenly gap-4 p-2 md:px-7">
            {
              movies.map(movie => (
                <div key={movie._id} className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
                  <img 
                    className='hover:border hover:border-blue-400'
                    src={movie.imageUrl} 
                    alt={movie.title + 'Thumbnail'} 
                  />
                  <h1>{movie.title}</h1>
                </div>
              ))
            }
          </div>
        ) : (<p>Loading Movies...</p>)
      }
    </>
  )
}

export default ContentDisplay
