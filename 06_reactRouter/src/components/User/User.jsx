import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}= useParams()  // the variable name should be same given on params in path
  return (
    <div className='bg-gray-600 text-white text-3xl text-center p-4'>
      User : {userid}
    </div>
  )
}

export default User
