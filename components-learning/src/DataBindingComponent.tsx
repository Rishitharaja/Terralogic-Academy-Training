import React, { useState } from 'react'

const DataBindingComponent = () => {
    const[inputVal,setInputval]=useState<string>('')
    const[password,setPassword]=useState('')
    const submitHandler =(e:any)=>{
        e.preventDefault();
        console.log("submitting:",inputVal)
        console.log('submitting password:',password)
    }
    const handleType=(e:any)=>{           //event handlers
        setInputval(e.target.value)
        console.log('typed charcter:',e.target.value)
    }
    const handlePassword=(e:any)=>{
        setPassword(e.target.value)
    }

  return (
    
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your Name' value={inputVal} onChange={handleType}/>
        <input type="password" placeholder='Enter your password' value={password} onChange={handlePassword}/>
        <button>submit</button>
    </form>
  )
}
export default DataBindingComponent;
