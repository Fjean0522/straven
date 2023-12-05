import bg_image from '../assets/bg_login_signup.png'

const Signup = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-no-repeat " 
      style={{ backgroundImage: `url(${bg_image})`}}
    >
       <h1 className='text-white text-5xl font-bold text-center pt-20 pb-5'>
          <span className='text-blue-600'>Str</span>
          aven
        </h1>

        <div className='flex flex-col items-center text-white max-w-full'>
            <form
                className='flex flex-col items-center gap-7 bg-blue-900 bg-opacity-20 rounded-md p-12 md:w-1/2'
            >
                <div className="mb-4 md:w-3/4">
                    <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                    />
                </div>

                <div className="mb-4 md:w-3/4">
                    <label className="block text-white text-lg font-bold mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                    />
                </div>

                <button 
                    type='submit'
                    className='bg-blue-900 bg-opacity-30 text-white text-2xl font-bold px-10 py-4 rounded-lg'
                >
                    Sign up
                </button>
            </form>

            <p className='text-xl pt-5'>
              Already have an account? 
              <span className='text-blue-600'> Login</span>
            </p>
        </div>
    </div>
  )
}

export default Signup