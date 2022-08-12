import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';


const UserList = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    }, [])
    
  return (
    <div>
        <h1 >List of users</h1>
        <div className='container'>
        { users.map((el)=><Card user={el}/>)
     }
     </div>
    </div>
  )
}

export default UserList