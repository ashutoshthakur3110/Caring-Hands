import React from 'react'
import Dashboard from '../components/Dashboard'
import '../css/JoinNow.css'
import Footer from '../components/Footer'
import { useState } from 'react'



const JoinNow = () => {
    const [data , setData] = useState({
        name: "",
        number: "",
        alternateNumber: "",
        address: "",
        email: "",
        aadharNumber: "",
        city: "",
        state: "",
        country: ""
    });

    const joinDetail = async() =>{
        const response = await fetch("http://localhost:8080/joinDetail" ,{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })

        if(response.ok){
            alert('data send');
        }
        else alert('error')

    };

  return (
    <>
    <Dashboard/>
    <img src="/public/frontimg3.png" className="img" alt="Banner" />
    <div className='JoinNow'>
        <h2>Join Now - Caring Hands</h2>
        <br/>
        <input onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))} placeholder='Name (As Per Aadhar)' />
        <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, number: e.target.value }))} placeholder='Phone Number' />
    <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, alternateNumber: e.target.value }))} placeholder='Alternate Phone Number' />
    <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, address: e.target.value }))} placeholder='Address' />
    <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))} placeholder='Email Id' />
    <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, aadharNumber: e.target.value }))} placeholder='Aadhar Number' />
    <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, city: e.target.value }))} placeholder='City' />
    <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, state: e.target.value }))} placeholder='State' />
    <br/>
    <input onChange={(e) => setData((prev) => ({ ...prev, country: e.target.value }))} placeholder='Country' />
    <br/>
        <button onClick={joinDetail} className='submitBtn' type='button'>Submit</button>
    </div>
    <Footer/>
    </>
  )
}

export default JoinNow