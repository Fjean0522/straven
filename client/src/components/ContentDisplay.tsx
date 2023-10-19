// import movie_1 from '../assets/movie_1.png'
// import movie_2 from '../assets/movie_2.png'
// import movie_3 from '../assets/movie_3.png' 
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


type Movie = {
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

  // useEffect(() => {
  //   if (movies.length > 0) {
  //     console.log(movies)
  //   }
  // }, [movies])

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


    </>
  )
}

export default ContentDisplay


