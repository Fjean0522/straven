import Header from "../Header"
import Hero from "../Hero"
import CategorySelection from "../CategorySelection"
import ContentDisplay from "../ContentDisplay"

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <CategorySelection />
      <ContentDisplay />
    </div>
  )
}

export default Home