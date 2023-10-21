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

  useEffect(() => {
    const getByCategory = async () => {
      try {
        if (category) {
          const response = await fetch(`api/movies/category/${category}`)
          const data = await response.json()
          setMovies(data)
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    getByCategory()
    
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