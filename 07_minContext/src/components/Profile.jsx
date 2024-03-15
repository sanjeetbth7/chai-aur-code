import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
 

    if (!user) return <div className='m-2 text-center text-3xl'>Please Login...</div>

    return <div className='m-2 text-center text-3xl'>Welcome {user.username}</div>

}

export default Profile
