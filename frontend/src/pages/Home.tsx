import Header from "../components/Header"
import Hero from "../components/Hero"
import CategorySelection from "../components/CategorySelection"
import ContentDisplay from "../components/ContentDisplay"

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