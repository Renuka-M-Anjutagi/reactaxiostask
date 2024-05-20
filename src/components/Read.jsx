
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

function Read() {
    const [data,setData] = useState([]);

    const {id} = useParams();
     useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => setData(res.data))
        .catch(error => console.error(error));
     },[])
  return (
    <div  className='d-flex w-100 vh-100 flex-column justify-content-center align-items-center bg-light '>

    <h1>Detail of Users</h1>
    <div className='w-100 rounded bg-white border shadow p-4'>
        <form >
            <div className='md-2'>
                <label htmlFor='name'>Name</label>
                <strong> {data.name}</strong>

            </div>
            <div className='md-2'>
                <label htmlFor='name'>User Name</label>
                <strong> {data.username}</strong>

            </div>
            <div className='md-2'>
                <label htmlFor='email'>Email</label>
                <strong> {data.email}</strong>
            </div>
            <div className='md-2'>
                <label htmlFor='phone'>Phone No</label>
                <strong> {data.phone}</strong>
            </div>
            <div className='md-2'>
                <label htmlFor='company'>company</label>
                <strong> {data.company}</strong>
            </div>

            <Link to={`/update/${id}`} className='btn btn-secondary'> Edit </Link>
            <Link to="/" className='btn btn-primary'>Back </Link> 
        </form>
    </div>

</div>
  )
}

export default Read
