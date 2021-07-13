import React, { useEffect, useState } from 'react';
import { getUserbyUsername } from '../utils/api';
import { useParams } from 'react-router-dom';

const User = () => {

    const [getUser, setGetUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const {username} = useParams();

    useEffect(()=>{
        getUserbyUsername(username).then(getUserFromApi =>{
            setGetUser(getUserFromApi)
            setIsLoading(false)
        })
    },[username])

    if (isLoading) return <p>Loading ...</p>
    return (
        <div>
             {console.log(getUser,'from component')}
             <h2>Username: {getUser.username}</h2>
             <p>Avatar: {getUser.avatar_url}</p>
             <img src={getUser.name} alt={getUser.avatar_url} />
        </div>
    );
};

export default User;