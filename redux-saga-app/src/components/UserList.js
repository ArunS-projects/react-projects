import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../redux/Actions';

const UserList = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state);
    
    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);
    
    useEffect(() => {
        console.log('State Updated:', { loading, users, error });
    }, [loading, users, error]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;