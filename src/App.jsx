import {useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { AppContextProvider } from './context/context';
import { Outlet } from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState([]);
  


  const handleAddContactinContacts = (contacts) => {
     setContacts(contacts);
  }
  

  return (
    <AppContextProvider value={{contacts,handleAddContactinContacts}}>
    <Navbar/>
    <div className=' container mt-3'>
    <Outlet/>
    </div>
    </AppContextProvider>
  )
}

export default App
