import React from "react";
import{useState} from 'react'
import {nanoid} from 'nanoid'

export default function App() {
  const[name,setName]=useState('')
  const[phone,setphone]=useState('')
  const[email,setEmail]=useState('')
  function handleSubmit(e){
    e.preventDefault()
    if(!(name && email && phone)){
      console.log('details')
      alert('enter fill details')
    }
    if(phone.length!=10){
      console.log('correct no')
      alert('enter correct phone no')
    }
    let data={
      id: nanoid(),
      name:name,
      phone:phone,
      email:email
    }
    localStorage.setItem('details', JSON.stringify(data))
    setName('')
    setphone('')
    setEmail('')
    console.log('sucessfully')
    alert('sucessfully')
  }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <section style={{margin:'10px'}} >
          <label>name:</label>
          <input type='text' value={name} placeholder='text'
          onChange={(e)=>setName(e.target.value)}/>
          </section>
          <section style={{margin:'10px'}}>
          <label>phone:</label>
          <input placeholder='Number' value={phone}
          onChange={(e)=>setphone(e.target.value)}/>
          </section>
          <section>
         <label>Email:</label>
         <input  placeholder='@email' value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          </section>
          <button>Submit</button>
          

        </form>
     
    </div>
  );
}
