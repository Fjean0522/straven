import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home' 
import Play from './pages/Play'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Settings from './pages/Settings'

const userAuthenticated = localStorage.getItem('user')

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/signup',
            element: <Signup />
        },

        {
            path: 'login',
            element: <Login />
        },

        {
            index: true,
            element: userAuthenticated ? <Home /> : <Login />
        },

        {
            path: '/',
            element: userAuthenticated ? <Home /> : <Login />
        },

        {
            path: '/settings',
            element: <Settings />
        },

        {
            path: '/play/:title',
            element: userAuthenticated ? <Play /> : <Login />
        },

        {
            path: '/category/:movieCategory',
            element: userAuthenticated ? <Home /> : <Login />
        }
    ])

  return <RouterProvider router={routes}/>
}

export default Routes