import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../apis/apis'
import UserCard from './UserCard'

const AllUsers = () => {

    const [page, setPage] = useState(1);

    const { data: usersData,isLoading } = useQuery({
        queryKey: ["Users"],
        queryFn: fetchUsers(),
    })

    return (
        <>
            <div className='flex gap-4'>
                <button 
                className='border rounded px-2 ' 
                onClick={()=>{setPage( Math.max(1, page-1))}}
                >Prev</button>
                <p>{page}</p>
                <button 
                className='border rounded px-2 ' 
                onClick={()=>{setPage(page+1)}}
                >Next</button>

            </div>
            <div className='flex flex-wrap gap-3 justify-between p-2'>
                {isLoading &&
                    <h1>Loading....</h1>
                }

                {usersData?.data?.data.map((user) => (
                    <UserCard key={user.id} data={user} />
                ))}
            </div>
        </>
    )
}

export default AllUsers
