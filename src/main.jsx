import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactList from './pages/ContactList.jsx'
import ContactForm from './pages/ContactForm.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<ContactList/>
      },
      {
        path:"contactform",
        element:<ContactForm/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}/>
)
