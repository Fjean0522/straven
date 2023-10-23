import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home' 
import Play from './components/pages/Play'
import Settings from './components/Settings'

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