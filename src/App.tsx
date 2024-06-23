import { FC } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Root from './routes/root.tsx'
import ErrorPage from './routes/error404.tsx'
import Contact from './routes/contact.tsx'
import './assets/route.css'
import About from './components/About';

const App: FC<any> = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "contacts/:contactId",
                    element: <Contact />,
                },
                {
                    path: "About",
                    element: <About />,
                },
            ],
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App