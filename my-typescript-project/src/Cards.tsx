import React from 'react'

const Cards = (props:{name:string,age:number,phoneNumber:string}) => {
    const {name,age,phoneNumber}=props
  return (
    <div>
      <h2>Details</h2> 
     <p>
       Name: {name}
     </p>
     <p>
        age: {age}
     </p>
     <p>
        phoneNumber:{phoneNumber}
     </p>
    </div>
  )
}

export default Cards