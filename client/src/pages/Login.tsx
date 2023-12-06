import { Link, useNavigate } from 'react-router-dom'
import { useState, ChangeEvent, FormEvent } from 'react'
import bg_image from '../assets/bg_login_signup.png'

const userLogin = {
    email: '',
    password: ''
}

const Login = () => {
  const [formData, setFormData] = useState(userLogin)
  const navigate = useNavigate() 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Create new user when sign up form is submitted
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem('user', JSON.stringify(data))

        // Redirect to home page if login is successful 
        window.location.reload()
        
      }

    } catch (error) {
      console.error('Login error:', error);
    }
  };  

  return (
    <div 
      className="min-h-screen bg-cover bg-no-repeat " 
      style={{ backgroundImage: `url(${bg_image})`}}
    >
       <h1 className='text-white text-5xl font-bold text-center pt-16 pb-7'>
          <span className='text-blue-600'>Str</span>
          aven
        </h1>

        <div className='flex flex-col items-center text-white max-w-full'>
            <form
                className='flex flex-col items-center gap-7 bg-blue-900 bg-opacity-20 rounded-md p-12 md:w-1/2'
                onSubmit={handleSubmit}
            >
                <div className="mb-4 md:w-3/4">
                    <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="border rounded w-full py-3 px-3 text-gray-700 focus:outline-blue-500"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4 md:w-3/4">
                    <label className="block text-white text-lg font-bold mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        className="border rounded w-full py-3 px-3 text-gray-700 focus:outline-blue-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button 
                    type='submit'
                    className='bg-blue-900 bg-opacity-30 text-white text-2xl font-bold px-10 py-4 rounded-lg'
                >
                    Login
                </button>
            </form>

            <p className='text-xl pt-5'>
              Don't have an account? 
              <Link to='/signup' className='text-blue-600'> Sign up</Link>
            </p>
        </div>
    </div>
  )
}

export default Login