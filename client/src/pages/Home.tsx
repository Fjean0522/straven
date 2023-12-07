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

export const API_URL: string = import.meta.env.VITE_API_URL

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  // Get url parameter / endpoint
  const { movieCategory } = useParams<string>()

  useEffect(() => {
    // Fetch movies by category if category is specified in url 
    if (movieCategory) {
        fetch(`${API_URL}/movies/category/${movieCategory}`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))

    // Fetch all movies if movie category is not specified
    } else {
        fetch(`${API_URL}/movies`)
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