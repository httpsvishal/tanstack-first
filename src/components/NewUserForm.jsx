import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react'
import { addUser, fetchRoles } from '../apis/apis';

const NewUserForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(false);
    const [role, setRole] = useState('');

    const queryClient = useQueryClient();

    const { data: rolesData, isLoading: isRolesLoading, error: rolesError } = useQuery({
        queryKey: ['roles'],
        queryFn: fetchRoles,
        staleTime: Infinity,
        //gctime
        //enabled
        //refetchInterval
    });

    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['Users'],
                exact : true,
                // predicate
            });
        }
        //onError
        //onSettled
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !role) {
            return <h1>Please fill all the fields</h1>
        }

        mutation.mutate({name, email, password, role });

        console.log(submit);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="border rounded p-4 flex flex-col gap-3 w-1/3 m-5" >
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="border rounded p-2 text-black"
                />
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border rounded p-2 text-black"
                />
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border rounded p-2 text-black"
                />

                {/* <select name="roles" id="roles" className="border rounded p-2 text-black" value={role} onChange={(e) => setRole(e.target.value)}>
                    { rolesData && rolesData.map((role, index) => (
                        <option key={index} value={role}>{role}</option>
                    ))}
                </select> */}

                <select
                    name="roles"
                    id="roles"
                    className="border rounded p-2 text-black"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="">Select Role</option>
                    {rolesData?.map((roleObj, index) => (
                        <option key={index} value={roleObj.name}>{roleObj.name}</option>
                    ))}
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewUserForm
