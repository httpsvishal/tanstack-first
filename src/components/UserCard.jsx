import React from 'react'

const UserCard = ({data}) => {
  return (
    <div className='border rounded p-2'>
        <img src={data.image? data.image :""} alt="" />
        <h1>{`${data.firstName ? data.firstName :""} ${data.maidenName ? data.maidenName : ""} ${data.lastName ? data.lastName:""}` }</h1>
        <h2>Age {data.age}</h2>
        <h2>Gender {data.gender}</h2>
        <h4>{data.email}</h4>
        <h4>{data.phone}</h4>
        <h4>{data.role}</h4>
    </div>
  )
}

export default UserCard
