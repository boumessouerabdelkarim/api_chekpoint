import React from 'react'

const Card = ({user}) => {
  return (
    <div className="card">
       <div className="card_header">{user.name}</div>
       <div className='card_content'>
       <div className='cont'> <h3> User name :</h3><span>{user.username}</span></div>
       <div className='cont'> <h3> Email:</h3><span> {user.email}</span></div>
        <div className='cont'><h3>Adresse:</h3><span>{user.address.street},{user.address.suite},{user.address.city}</span></div>
        <div className='cont'><h3> Phone: </h3><span>{user.phone}</span></div>
        
        </div>
    </div>
  )
}

export default Card