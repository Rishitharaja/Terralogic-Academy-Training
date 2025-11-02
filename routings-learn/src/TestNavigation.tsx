import React from 'react'
import { useNavigate } from 'react-router-dom'

const TestNavigation = () => {
    const navigate = useNavigate()
    const handleSubmit = () =>{
        navigate('/about')
    }
  return (
    <form onSubmit={handleSubmit}>
        <button type='submit'>Submi</button>
    </form>
  )
}

export default TestNavigation