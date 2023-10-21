import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../Header"
import Hero from "../Hero"
import CategorySelector from "../CategorySelector"
import MediaDisplay from "../MediaDisplay"

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
  const { home } = useParams<string>()
  const { movieCategory } = useParams<string>()

  useEffect(() => {
    // Fetch all movies if no category is specified in url or when home is in url
    if (home || !movieCategory) {
      fetch('/api/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))

    // Fetch movies by category if category is specified in url 
    } else if (movieCategory) {
        fetch(`/api/movies/category/${movieCategory}`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))
    }
  }, [home, movieCategory])

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