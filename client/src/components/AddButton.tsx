import { API_URL } from "../pages/Home"
import { useState } from "react";

type watchListIdProp = {
  userId: string
  movieId: string
}

const AddButton = ({userId, movieId }: watchListIdProp) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const addToWatchList = async () => {
    try {
      const response = await fetch(`${API_URL}/watchlist/add/${userId}/${movieId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      
      if (response.ok) {
        setButtonClicked(true)
      }
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
     {!buttonClicked ? (
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => addToWatchList()}
        >
          Add to Watchlist
        </button>
      ) : null}
    </>
  )
}

export default AddButton