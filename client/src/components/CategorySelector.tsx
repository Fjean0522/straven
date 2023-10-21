import { Link } from "react-router-dom"

const CategorySelector = () => {
  
  return (
    <div className="text-white font-bold flex justify-between p-6 md:justify-evenly md:text-lg md:mb-5">
        <Link 
          to={'/category/Action'}
          className="hover:text-blue-600 cursor-pointer hover:scale-105"
          >
          Action
        </Link>

        <Link 
          to={'/category/Comedy'}
          className="hover:text-blue-600 cursor-pointer hover:scale-105"
          >
          Comedy
        </Link>

        <Link 
          to={'/category/Thriller'}
          className="hover:text-blue-600 cursor-pointer hover:scale-105"
          >
          Thriller
        </Link>

        <Link 
          to={'/category/Horror'}
          className="hover:text-blue-600 cursor-pointer hover:scale-105"
          >
          Horror
        </Link>
      </div>
  )
}

export default CategorySelector