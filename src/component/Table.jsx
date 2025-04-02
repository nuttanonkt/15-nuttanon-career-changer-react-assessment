import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Table() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
        setError("");
        setLoading(true);

    try{
        const res = await axios.get(
            "https://jsd5-mock-backend.onrender.com/members"
        );
        setUsers(res.data);
    }
    catch(err){
        console.error(err);
        setError("fail fetch")
    }
    finally{
        setLoading(false);
    }
    };
    fetchUsers();
  },[]);


    return (
    <>
        {loading && <p>loading users</p> }

        {error && ( <p>Error: {error} </p> 
    )}

    {!loading && !error && (
        <table className='w-[90%] m-4 '>
        <thead>
            <tr className=' text-center text-sm border-2'>
                <th className='px-2 py-3'>Name</th>
                <th className='px-2 py-3'>Lastname</th>
                <th className='px-2 py-3'>Position</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id} className='text-center border-1'>
                <td className='px-2 py-3'>{user.name}</td>
                <td className='px-2 py-3'>{user.lastname}</td>
                <td className='px-2 py-3'>{user.position}</td>
                <td>
                    <button> Delete</button>
                </td>
                </tr>
            ))
            }
        </tbody>
    </table>
    )}
    </>


  )

}

export default Table