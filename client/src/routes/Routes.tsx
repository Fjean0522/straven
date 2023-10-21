import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/pages/Home' 
import Play from '../components/pages/Play'

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },

        {
            path: '/play',
            element: <Play />
        }
    ])

  return <RouterProvider router={routes}/>
}

export default Routes