
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
const [data,setData] = useState([])
     useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(res => setData(res.data))
        .catch(error => console.error(error));
     },[]);

     const handleDelete = (id) => {
        const confirm =window.confirm(" Would You like to Delete ?"+id);
        if(confirm)
            {
                axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
                .then(res => {
                   location.reload();
                }).catch(err => console.log(err));
            }
      }
  return (
    <div  className='d-flex flex-column  align-items-center bg-light vh-100'>

        <h1>List of Users</h1>
        <div className='w-100  flex-column rounded bg-white border shadow p-4'>

            <div className='d-flex  justify-content-end'>
               <Link to="/create" className='btn btn-success'>Add +</Link> 
            </div>
            <table className='table table-striped'>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                
                <th scope="col">Phone</th>
                <th scope="col">Company</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d,i) => (

                        <tr key={i}>
                        <td>{d.id}</td>
                
                        <td>{d.name}</td>
                        <td>{d.username}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                       
                        <td>{d.company[0]}</td>
                        <td>
                        <Link to={`${d.id}`} className='btn btn-sm btn-info me-2' >Read</Link>
                        <Link to={`/${d.id}`} className='btn btn-sm btn-primary me-2'> Edit </Link>
                            <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger me-2' >Delete</button>
                        </td>
                    </tr>
                    
                    ))
                }
            
            </tbody>
            </table>

        </div>
    
    </div>
  )


}

export default Home
