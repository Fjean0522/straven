import Header from "../components/Header"
import { userRegister } from "./Signup"
import { API_URL } from "./Home"
import { useState, ChangeEvent, FormEvent  } from "react"

const Settings = () => {
  const [formData, setFormData] = useState(userRegister)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_URL}/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      })

      if (response.ok) {        
        window.location.reload()
      }
      
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return (
    <>
     <Header />
     <div className='flex flex-col items-center bg-black text-white max-w-full min-h-screen pt-5'>
        <h1 className="text-3xl font-bold">Settings</h1>
        <form
          className='flex flex-col items-center gap-7 rounded-md p-12 md:w-1/2'
          onSubmit={handleSubmit}
        >
          <div className="mb-4 md:w-3/4">
            <label className="block text-lg font-bold mb-2" htmlFor="email">
              Change Email:
            </label>
            <input
              className="border rounded w-full py-3 px-3 text-gray-700 focus:outline-blue-500"
              id="email"
              type="email"
              placeholder="Enter a new email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 md:w-3/4">
            <label className="block text-lg font-bold mb-2" htmlFor="username">
              Change Username:
            </label>
            <input
              className="border rounded w-full py-3 px-3 text-gray-700 focus:outline-blue-500"
              id="username"
              type="text"
              placeholder="Enter a new username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 md:w-3/4">
            <label className="block text-lg font-bold mb-2" htmlFor="password">
              Change Password:
            </label>
            <input
              className="border rounded w-full py-3 px-3 text-gray-700 focus:outline-blue-500"
              id="password"
              type="password"
              placeholder="Enter a new password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button 
            type='submit'
            className='bg-blue-700 text-white text-2xl font-bold px-10 py-4 rounded-lg hover:bg-blue-600 hover:scale-105'
          >
            Update
          </button>
        </form>          
      </div>      
    </>
  )
}

export default Settings

