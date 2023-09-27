import React from 'react'
import { useEffect,useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import { firebaseDB } from './FirebaseConfig';
import { ref,update } from 'firebase/database';

function Edit() {
    let [searchParams]=useSearchParams();

    const[data,setData] = useState({
        firstName:'',
        lastName:'',
        email:''
    })
   
    const {firstName,lastName,email} = {...data}

    const handleOnChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        setData({
        firstName:searchParams.get('firstname'),
        lastName:searchParams.get('lastname'),
        email:searchParams.get('email')
        })
    },[searchParams])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       const db= firebaseDB;
       const dbRef =ref(db,`users/${searchParams.get('firebaseKey')}`);
       update(dbRef,data).then(()=>{
        console.log('data edited')
       }).catch((err)=>{
         console.err(err.message)
       })


    }
  return (
    <>
    <center><h2>Edit Form</h2></center>
    <form className='form-horizontal' onSubmit={handleSubmit} autoComplete='off' >

        <div className="form-group">
        <label className='control-label col-sm-2'>First Name:</label>
        <div className="col-sm-4">
        <input className='form-control' name='firstName' value={firstName} onChange={handleOnChange} type="text" placeholder='Enter Your First Name' />
        </div>
        </div>

        <div className="form-group">
        <label className='control-label col-sm-2'>Last Name:</label>
        <div className="col-sm-4">
        <input className='form-control' name='lastName' value={lastName} onChange={handleOnChange} type="text" placeholder='Enter Your Last Name' />
        </div>
        </div>

        <div className="form-group">
        <label className='control-label col-sm-2'>E-mail:</label>
        <div className="col-sm-4">
        <input className='form-control' name='email' value={email} type="email" onChange={handleOnChange} placeholder='Enter Your E-mail' />
        </div>
        </div>
        
        <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
        <input  type="submit" className='btn btn-success ' value='save' />
        </div>
        </div>
    
        
    </form>
    </>

  )
}

export default Edit