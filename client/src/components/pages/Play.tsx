import { useState, useEffect } from "react"
import { Movie } from "./Home"
import { useParams } from "react-router-dom"
import Header from "../Header"
import MediaPlayer from '../MediaPlayer'

const mediaDefault = {
  _id: '',
  title: '',
  description: '',
  category: '',
  duration: '',
  rating: '',
  imageUrl: '',
  videoUrl: ''
}

const Play = () => {
  const [selectedMovie, setSelectedMovie] = useState<string | undefined>('')
  const [media, setMedia] = useState<Movie>(mediaDefault)

  const { title } = useParams<string>()
  
  useEffect(() => {
    setSelectedMovie(title)
    if (selectedMovie) {
      fetch(`/api/movies/${selectedMovie}`)
      .then(response => response.json())
      .then(data => setMedia(data[0]))
      .catch(error => console.log(error))
    }
  }, [selectedMovie, title])

  
  return (
    <>
      <Header />
      <MediaPlayer url={media.videoUrl} media={media}/>
    </>
  )
}

export default Play