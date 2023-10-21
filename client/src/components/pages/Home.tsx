import { useState, useEffect } from "react"
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
  const [category, setCategory] = useState<string>('')
  const [movies, setMovies] = useState<Movie[]>([])

  // Fetch all movies to display on initial render
  useEffect(() => {
    fetch('/api/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))
  }, [])

  // Fetch movies to display by category when respective category button is clicked
  useEffect(() => {
    if (category) {
      fetch(`api/movies/category/${category}`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))
    }
  }, [category])

  return (
    <div className="bg-black min-h-screen">
      <Header bgOpacityClass="bg-opacity-50" />
      <Hero />
      <CategorySelector setCategory={setCategory} />
      <MediaDisplay movies={movies} />
    </div>
  )
}

export default Home