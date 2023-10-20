import Header from "../Header"
import Hero from "../Hero"
import MediaDisplay from "../MediaDisplay"


const Home: React.FC = () => {


  return (
    <div className="bg-black min-h-screen">
      <Header bgOpacityClass="bg-opacity-50" />
      <Hero />
      <MediaDisplay />
    </div>
  )
}

export default Home