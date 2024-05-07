import axios from 'axios';
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

function Create() {

    const [values, setValues] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',

    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users' , values)
        .then(res => {
            console.log(res);
            navigate('/')
        
        
        })
        .catch(err => console.log(err));
    }
  return (
    <div  className='w-100 vh-100 column justify-content-center align-items-center bg-light ' security='display:flex'>

        <h1>Add  of Users</h1>
        <div className='w-100 rounded bg-white border shadow p-4'>

            <div className='justify-content-end'>
            
            </div>
           
            <form onSubmit={handleSubmit}>
                <div className='md-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter - Name' 
                    
                    onChange={e => setValues({...values,name:e.target.value})}/>

                </div>
                <div className='md-2'>
                    <label htmlFor='unamename'>Username</label>
                    <input type='text' name='unamename' className='form-control' placeholder='Enter - Name' 
                    
                    onChange={e => setValues({...values,username:e.target.value})}/>

                </div>
                <div className='md-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' className='form-control' placeholder='Enter - Email' 
                     onChange={e => setValues({...values,email:e.target.value})}/>

                </div>
                <div className='md-2'>
                    <label htmlFor='name'>Phone No</label>
                    <input type='text' name='phoneno' className='form-control' placeholder='Enter - phone No'
                     onChange={e => setValues({...values,phone:e.target.value})} />

                </div>
                <div className='md-2'>
                    <label htmlFor='company'>company</label>
                    <input type='text' name='company' className='form-control' placeholder='Enter - Company Name' 
                     onChange={e => setValues({...values,company:e.target.value})}/>

                </div>

                <button className='btn btn-succuss'> Submit </button>
                <Link to="/" className='btn btn-primary'>Back </Link> 
            </form>
        </div>
    
    </div>
  )
}

export default Create