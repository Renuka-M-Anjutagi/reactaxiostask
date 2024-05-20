
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link,useParams ,useNavigate} from 'react-router-dom';


function Update() {
  //  const [data,setData] = useState([]);

    const {id} = useParams();
     useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => setValues(res.data))
        .catch(error => console.error(error));
     },[])

     const [values, setValues] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
       company:'',

    })
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/users/'+id , values)
        .then(res => {
            console.log(res);
            navigate('/')
        
        
        })
        .catch(err => console.log(err));
    }


  return (
    <div  className='d-flex w-100 vh-100 flex-column justify-content-center align-items-center bg-light '>

    <h1>Edit of Users</h1>
    <div className='w-100 rounded bg-white border shadow p-4'>

        <div className='d-flex justify-content-end'>
        
        </div>
       
        <form onSubmit={handleUpdate}>
            <div className='md-2'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='form-control' placeholder='Enter - Name' 
                value={values.name} onChange={e => setValues({...values,name:e.target.value})}  />

            </div>
            <div className='md-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' className='form-control' placeholder='Enter - Email' 
                value={values.email} onChange={e => setValues({...values,email:e.target.value})} />

            </div>
            <div className='md-2'>
                <label htmlFor='name'>Phone No</label>
                <input type='text' name='phone' className='form-control' placeholder='Enter - phone No'
                value={values.phone} onChange={e => setValues({...values,phone:e.target.value})}/>

            </div>
            <div className='md-2'>
                <label htmlFor='company'>company</label>
                <input type='text' name='company' className='form-control' placeholder='Enter - Company Name' 
                value={values.company} onChange={e => setValues({...values,company:e.target.value})}/>

            </div>

            <button  className='btn btn-succuss'> Update </button>
            <Link to="/" className='btn btn-primary'>Back </Link> 
        </form>
    </div>

</div>
  )
}

export default Update
