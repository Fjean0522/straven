import Header from "../Header"
import Hero from "../Hero"
import CategorySelection from "../CategorySelection"
import ContentDisplay from "../ContentDisplay"


const Home: React.FC = () => {


  return (
    <div className="bg-black min-h-screen">
      <Header bgOpacityClass="bg-opacity-50" />
      <Hero />
      <CategorySelection />
      <ContentDisplay />
    </div>
  )
}

export default Home