

type CategoryProp = {
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategorySelector = ({ setCategory }: CategoryProp) => {
  
  return (
    <div className="text-white font-bold flex justify-between p-6 md:justify-evenly md:text-lg md:mb-5">
        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Action')}
          >
          Action
        </button>

        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Comedy')}
          >
          Comedy
        </button>

        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Thriller')}
          >
          Thriller
        </button>

        <button 
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory('Horror')}
          >
          Horror
        </button>
      </div>
  )
}

export default CategorySelector