import React from 'react'
import './index.css';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {  firebaseDB } from './FirebaseConfig';
import { ref, push, onValue, query, remove } from 'firebase/database';
// import { collection, getDocs } from 'firebase/firestore';




function Register() {
    let navigate =useNavigate();
    const[data,setData] = useState({
        firstName:'',
        lastName:'',
        email:''
    })
   
    const {firstName,lastName,email} = {...data}
    
    const handleOnChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if (!firstName || !lastName || !email){
                alert('please fill the feilds')
        }else{
        const db = firebaseDB;
        const dbRef = ref(db, 'users');
        await push(dbRef, data) // use the push function to add data to the node
        .then ( () => {
          alert ('Data submitted 👍' );
          fetchData();
        })
        .catch ( (error) => {
          alert (error.message);
        });
        setData({
            firstName:"",
            lastName:"",
            email:""
        })
    }
    }
    const [getData,setGetData]=useState({});
    const fetchData=()=>{
        const dbRef = ref(firebaseDB, 'users');
        const q = query(dbRef);
        onValue(q, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const formattedData = Object.keys(data).map(key => ({...data[key], firebaseKey: key}));
                setGetData(formattedData);
            } else {
                console.log("No data found");
            }
        }, {
            onlyOnce: true,
        });
    }

    useEffect(() => {
       fetchData()
    }, []);

    const handleDelete = firebaseKey => {
        const dbRef = ref(firebaseDB, `users/${firebaseKey}`);
        remove(dbRef).then(() => {
            console.log('Data deleted successfully');
            // Update the local state
            setGetData(prevData => prevData.filter(item => item.firebaseKey !== firebaseKey));
        }).catch((err) => {
            console.error(err);
        });
    }
  return (
    <>
    <center><h2>Register Form</h2></center>
    <form className='form-horizontal' autoComplete='off' onSubmit={handleSubmit}>

        <div className="form-group">
        <label className='control-label col-sm-2'>First Name:</label>
        <div className="col-sm-4">
        <input className='form-control' type="text" onChange={handleOnChange} name='firstName' value={firstName} placeholder='Enter Your First Name' />
        </div>
        </div>

        <div className="form-group">
        <label className='control-label col-sm-2'>Last Name:</label>
        <div className="col-sm-4">
        <input className='form-control' type="text" onChange={handleOnChange} name='lastName' value={lastName} placeholder='Enter Your Last Name' />
        </div>
        </div>

        <div className="form-group">
        <label className='control-label col-sm-2'>E-mail:</label>
        <div className="col-sm-4">
        <input className='form-control' type="email" onChange={handleOnChange} name='email' value={email} placeholder='Enter Your E-mail' />
        </div>
        </div>
        
        <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
        <input  type="submit" className='btn btn-success' />
        </div>
        </div>
    </form>
    
    {/* <div>
        {getData && Object.keys(getData).map(key =>(
            <div className='border' key={key}>
                <p>First Name: {getData[key].firstName}</p>
                <p>Last Name: {getData[key].lastName}</p>
                <p>E-mail: {getData[key].email}</p>
            </div>
        ))}
    </div> */}

<div>
  {getData && Object.keys(getData).map(key => (
    <div className='border' key={key}>
      {getData[key] && (
        <>
          <p className='border-para'>First Name: {getData[key].firstName}</p>
          <p className='border-para'>Last Name: {getData[key].lastName}</p>
          <p className='border-para'>E-mail: {getData[key].email}</p>
          <button className='btn btn-success mx-2 my-2' onClick={()=>{
            navigate(`/edit?firstname=${getData[key].firstName}&lastname=${getData[key].lastName}&email=${getData[key].email}&firebaseKey=${getData[key].firebaseKey}`)
          }}>Update</button>
          <button className="btn btn-danger my-2" onClick={()=>{handleDelete(getData[key].firebaseKey)}}>Delete</button>
        </>
      )}
    </div>
  ))}
</div>
    </>
  )
}

export default Register