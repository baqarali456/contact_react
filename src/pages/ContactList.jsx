import React,{useState,useEffect} from 'react'
import { useAppContext } from '../context/context'
import ContactCard from '../components/ContactCard';
import axios from 'axios';

function ContactList() {

    const {contacts=[]} = useAppContext();

    const [loading, setLoading] = useState(true);
    const [error,setError] = useState('');

  const {handleAddContactinContacts} = useAppContext()

  useEffect(()=>{
      axios.get('http://localhost:8000/contacts')
      .then(response=>{
        handleAddContactinContacts(response.data.contacts);
      })
      .catch(err=>{
        setError(err.response.data.message)
      })
      .finally(()=>setLoading(false));


  },[])


  return (
    loading ? <h1 className=' text-center'>Loading ...</h1> :(error? <h1 className=' text-center'>{error}</h1> : <div className=' d-flex flex-wrap gap-5 p-2'>
        {
            contacts.length > 0 ? contacts.map(contact=>(
                <ContactCard key={contact?._id} {...contact}/>
            )) :(
                <h1 className=' text-center'>No Contact In Contacts List</h1>
            )
        }

    </div>)
  )
}

export default ContactList