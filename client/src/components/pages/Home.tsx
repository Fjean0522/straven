import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { mediaDefault } from "./Play"
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
  const [singleMovie, setSingleMovie] = useState<Movie>(mediaDefault)


  // Get url endpoints
  const { movieCategory } = useParams<string>()
  const { title } = useParams<string>()

  useEffect(() => {
    // Fetch a single movie when user searches for movie by name
    if (title) {
        fetch(`/api/movies/${title}`)
        .then(response => response.json())
        .then(data => setSingleMovie(data[0]))
        .catch(error => console.log(error))

    // Fetch movies by category if category is specified in url 
    } else if (movieCategory) {
      fetch(`/api/movies/category/${movieCategory}`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))

    // Fetch all movies if no title or category is specified
    } else if (!movieCategory || !title) {
        fetch('/api/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))
    }
  }, [movieCategory, title])

  return (
    <div className="bg-black min-h-screen">
      <Header bgOpacityClass="bg-opacity-50" />
      <Hero />
      <CategorySelector />
      <MediaDisplay movies={movies} singleMovie={singleMovie}/>
    </div>
  )
}

export default Home