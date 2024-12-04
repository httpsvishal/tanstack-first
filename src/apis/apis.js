export const fetchUsers = async (page = 1, limit = 8) => {
    const response = await fetch(`http://localhost:3000/users?_page=${page}&_per_page=${limit}`);
    const data = await response.json();
    return data;
}

export const fetchTotal = async () => {
    const response = await fetch('http://localhost:3000/total');
    const data = await response.json();
    return data;
}

export const fetchUser = async (id) => {
    const response = await fetch(`http://localhost:3000/users/:${id}`);
    const data = await response.json();
    const user = data.find(user => user.id === id);
    return user;
}

export const addUser = async (user) => {
    console.log(user);
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}

export const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}

export const updateUser = async (id, user) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}

export const fetchRoles = async () => {
    const response = await fetch('http://localhost:3000/roles');

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    return response.json();
    }
