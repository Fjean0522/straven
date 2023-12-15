import { API_URL } from "../pages/Home"

type watchListIdProp = {
  userId: string
  movieId: string
}

const RemoveButton = ({userId, movieId }: watchListIdProp) => {
  const removeFromWatchList = async () => {
    try {
      const response = await fetch(`${API_URL}/watchlist/remove/${userId}/${movieId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      
      if (response.ok) {
        window.location.reload()
      }
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
     <button 
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={() =>  removeFromWatchList()}
      >
        Remove from Watchlist
      </button>
    </>
  )
}

export default RemoveButton