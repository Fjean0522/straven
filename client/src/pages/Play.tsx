import { useState, useEffect } from "react"
import { Movie } from "./Home"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import MediaPlayer from '../components/MediaPlayer'

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
  const [media, setMedia] = useState<Movie>(mediaDefault)
  const { title } = useParams<string>()
  
  useEffect(() => {
    if (title) {
      fetch(`/api/movies/${title}`)
      .then(response => response.json())
      .then(data => setMedia(data[0]))
      .catch(error => console.log(error))
    }
  }, [title])

  
  return (
    <>
      <Header />
      <MediaPlayer url={media.videoUrl} media={media}/>
    </>
  )
}

export default Play