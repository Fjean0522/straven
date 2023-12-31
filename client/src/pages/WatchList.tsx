import Header from "../components/Header"
import RemoveButton from "../components/RemoveButton"
import { Movie } from '../pages/Home'
import { API_URL } from "../pages/Home"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"



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
                  <div 
                    className='relative group text-white font-semibold text-base flex flex-col items-center gap-3 md:w-2/6 lg:w-2/6 mx-1 mt-6'
                    key={movie._id} 
                  >
                    <img 
                      className='rounded-md mt-16 transition-transform transform'
                      src={movie.imageUrl} 
                      alt={movie.title + 'Thumbnail'} 
                    />
                    <h1>{movie.title}</h1>

                    <div className="overlay hidden absolute top-3 left-0 w-full h-full hover:flex flex-col items-center justify-center bg-black bg-opacity-70 group-hover:flex">
                      
                      <div className="buttons flex gap-2">
                        <Link 
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                          to={`/play/${movie.title}`}
                        >
                          Play
                        </Link>

                        <RemoveButton userId={userId} movieId={movie._id} />
                      </div>
                    </div>
                  </div>
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