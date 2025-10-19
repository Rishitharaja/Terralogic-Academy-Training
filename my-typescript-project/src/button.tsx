import React from 'react'
import './button.css'
const Button =(props:{name:string}) => {
    const {name} = props;
  return (
    <div>
    <button style={{
        backgroundColor:'white',
        color:'black',
        padding:"auto",
        marginLeft:"10x",
        marginBottom:"20x"
        }}className="">
       {name}
    </button>
    </div>
  )
}

export default Button;