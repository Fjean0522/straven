import Header from "../Header"
import Hero from "../Hero"
import CategorySelection from "../CategorySelection"
import ContentDisplay from "../ContentDisplay"
import React from "react"

const Home: React.FC = () => {


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