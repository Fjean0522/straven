import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home' 
import Play from './pages/Play'

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
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
    ])

  return <RouterProvider router={routes}/>
}

export default Routes