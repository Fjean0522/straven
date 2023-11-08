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
  const API_URL: string = import.meta.env.VITE_API_URL
  
  useEffect(() => {
    if (title) {
      fetch(`${API_URL}/${title}`)
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