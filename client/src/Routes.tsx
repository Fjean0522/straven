import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home' 
import Play from './pages/Play'
import Settings from './pages/Settings'

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },

        {
            path: '/home',
            element: <Home />
        },

        {
            path: '/:title',
            element: <Home />
        },

        {
            path: '/home/:title',
            element: <Home />
        },

        {
            path: '/play/:title',
            element: <Play />
        },

        {
            path: '/category/:movieCategory',
            element: <Home />
        },

        {
            path: '/settings',
            element: <Settings />
        }
    ])

  return <RouterProvider router={routes}/>
}

export default Routes