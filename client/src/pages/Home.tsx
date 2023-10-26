import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Hero from "../components/Hero"
import CategorySelector from "../components/CategorySelector"
import MediaDisplay from "../components/MediaDisplay"

export type Movie = {
  _id: string,
  title: string,
  description: string,
  category: string,
  duration: string,
  rating: string,
  imageUrl: string,
  videoUrl: string
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  // Get url endpoints
  const { movieCategory } = useParams<string>()
  const API_URL: string = import.meta.env.VITE_API_URL

  useEffect(() => {
    // Fetch movies by category if category is specified in url 
    if (movieCategory) {
        fetch(`${API_URL}/category/${movieCategory}`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))

    // Fetch all movies if movie category is not specified
    } else {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))
    }
  }, [movieCategory])

  return (
    <div className="bg-black min-h-screen">
      <Header bgOpacityClass="bg-opacity-50" />
      <Hero />
      <CategorySelector />
      <MediaDisplay movies={movies} />
    </div>
  )
}

export default Home