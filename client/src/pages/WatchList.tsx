import Header from "../components/Header"
import { Movie } from '../pages/Home'
import { API_URL } from "../pages/Home";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";



const WatchList = () => {
  const [watchlist, setWatchlist] = useState<Movie[]>([])
  const [userId, setUserId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getWatchList = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}/users/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })

        const data = await response.json()
        setUserId(data._id)        

        if (userId) {
          const userWatchList = await fetch(`${API_URL}/watchlist/${userId}`)
          const savedMovies = await userWatchList.json()
          setWatchlist(savedMovies)
          setIsLoading(false)
        }
      
      } catch (error) {
        console.log(error);
      }
    }
    
    getWatchList()
  }, [userId])

  return (
    <>
     <Header />
     <div className="bg-black min-h-screen">
        {
          isLoading ? <h3 className="text-white text-xl text-center pt-7">Loading Movies...</h3>
          :
          watchlist.length > 0 ? (
            <div 
              className='flex flex-wrap justify-center pt-2 pb-5 w-full sm:px-4 md:px-5'
            >
              {
                watchlist.map(movie => (
                    <Link 
                      to={`/play/${movie.title}`}
                      className='text-white font-semibold text-base flex flex-col items-center gap-3 md:w-2/6 lg:w-2/6 mx-1 mt-6 
                      hover:cursor-pointer md:mt-0 '
                      key={movie._id} 
                      >
                      <img 
                        className='rounded-md mt-16 hover:border hover:border-blue-400'
                        src={movie.imageUrl} 
                        alt={movie.title + 'Thumbnail'} 
                      />
                      <h1>{movie.title}</h1>
                    </Link>
                ))
              }
            </div>
          ) 
          : 
          <h3 className="text-white text-2xl text-center pt-7">You have no saved movies</h3>
        }         
     </div> 
    </>
  )
}

export default WatchList