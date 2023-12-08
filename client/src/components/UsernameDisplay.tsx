import { useEffect, useState } from "react"
import { API_URL } from "../pages/Home"

const UsernameDisplay = () => {
  const [user, setUser] = useState()

  const getUser = async () => {
    try {
      const response = await fetch(`${API_URL}/users/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include"
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.username)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [user])

  return (
    <div className="text-white font-semibold pt-1 md:text-lg">
     {user}
    </div>
  )
}

export default UsernameDisplay