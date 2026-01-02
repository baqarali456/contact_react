import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddContact() {

    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Phone,setPhone] = useState('');
    const [Message,setMessage] = useState('')
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    

    const navigate = useNavigate()


    const handleAddContact = async(e) =>{
        e.preventDefault();
        setError('')
        setSuccess('')
        try {
           const response = await axios.post('http://localhost:8000/create-contact',{Name,Email,Phone,Message});
           setSuccess(response.data.message)
           navigate("/")
        } catch (error) {
            console.log(error)
            setError(error.response.data.message || "something went wrong");
        }
    }

  return (
    <form onSubmit={handleAddContact} className="rounded shadow bg-primary p-4">
        <div className=' mb-2'>
            <label className="d-block mb-1" htmlFor="Name">Name</label>
            <input required className=' w-100 rounded p-2' onChange={(e)=>setName(e.target.value)} type="text" value={Name}  id="Name" />

        </div>
        <div className=' mb-2'>
            <label className="d-block mb-1" htmlFor="Email">Email</label>
            <input required className=' w-100 rounded p-2' onChange={(e)=>setEmail(e.target.value)} type="text" value={Email}  id="Email" />
        </div>
        <div className=' mb-2'>
            <label className="d-block mb-1" htmlFor="Phone">Phone</label>
            <input  required className=' w-100 rounded p-2' onChange={(e)=>setPhone(e.target.value)} type="text" value={Phone}  id="Phone" />

        </div>
        <div className=' mb-2'>
            <label className="d-block mb-1" htmlFor="Message">Message</label>
            <input  className=' w-100 rounded p-2' onChange={(e)=>setMessage(e.target.value)} type="text" value={Message}  id="Message" />

        </div>

        {
            error && <p className='text-danger'> {error}</p>
        }
        {
            success && <p className='text-success'> {success}</p>
        }


        <button type='submit' className=' btn btn-dark '>Submit</button>

    </form>
  )
}

export default AddContact