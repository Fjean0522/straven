import React from "react"



const CategorySelection:React.FC = () => {


  
  return (
    <div className="text-white font-bold flex justify-between p-6 md:justify-evenly md:text-lg md:mb-5">
      <h2 className="hover:text-blue-600 cursor-pointer">Action</h2>
      <h2 className="hover:text-blue-600 cursor-pointer">Comedy</h2>
      <h2 className="hover:text-blue-600 cursor-pointer">Thriller</h2>
      <h2 className="hover:text-blue-600 cursor-pointer">Horror</h2>
    </div>
  )
}

export default CategorySelection